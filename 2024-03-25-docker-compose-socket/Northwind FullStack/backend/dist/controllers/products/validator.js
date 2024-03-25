"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchProductValidator = exports.putProductValidator = exports.addProductValidator = void 0;
const joi_1 = __importDefault(require("joi"));
exports.addProductValidator = joi_1.default.object({
    id: joi_1.default.number().optional(),
    name: joi_1.default.string().alphanum().min(4).lowercase().required(),
    price: joi_1.default.number().min(1).max(1000).required(),
    stock: joi_1.default.number().min(0).max(1000).default(0),
    image: joi_1.default.object({
        mimetype: joi_1.default.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});
exports.putProductValidator = exports.addProductValidator;
exports.patchProductValidator = joi_1.default.object({
    id: joi_1.default.number().optional(),
    name: joi_1.default.string().alphanum().min(4).lowercase(),
    price: joi_1.default.number().min(1).max(1000),
    stock: joi_1.default.number().min(0).max(1000),
    image: joi_1.default.object({
        mimetype: joi_1.default.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});
