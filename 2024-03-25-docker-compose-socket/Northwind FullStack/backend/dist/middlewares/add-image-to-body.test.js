"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const add_image_to_body_1 = __importDefault(require("./add-image-to-body"));
describe('addImageToBody middleware unit tests', () => {
    test('adds image to body', () => {
        const req = {
            body: {},
            files: {
                image: (0, uuid_1.v4)()
            }
        };
        const res = {};
        const next = (() => { });
        (0, add_image_to_body_1.default)(req, res, next);
        expect(req.body).toHaveProperty('image');
        expect(req.body.image).toEqual(req.files.image);
    });
    test('does not adds image to body if no image in files', () => {
        const req = {
            body: {}
        };
        const res = {};
        const next = (() => { });
        (0, add_image_to_body_1.default)(req, res, next);
        expect(req.body).toHaveProperty('image');
        expect(req.body.image).not.toBeDefined;
    });
});
