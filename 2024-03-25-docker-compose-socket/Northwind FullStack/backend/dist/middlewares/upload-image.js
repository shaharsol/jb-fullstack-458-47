"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const path_1 = __importDefault(require("path"));
const util_1 = require("util");
const config_1 = __importDefault(require("config"));
function uploadImage(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.image)
            return next();
        const image = req.body.image;
        // tofu.jpg
        // tofu.jpg.jpg.png.jpg
        const imageName = `${(0, uuid_1.v4)()}${path_1.default.extname(image.name)}`;
        // save image somewhere
        const mvPromisifed = (0, util_1.promisify)(image.mv).bind(image);
        try {
            const fileAbsoultePath = path_1.default.join(config_1.default.get('app.images.path'), imageName);
            yield mvPromisifed(fileAbsoultePath);
            req.body.imageName = imageName;
            return next();
        }
        catch (err) {
            next(err);
        }
    });
}
exports.default = uploadImage;
