"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.remove = exports.patch = exports.update = exports.add = exports.getOne = exports.getAll = void 0;
const factory_1 = __importDefault(require("../../models/product/factory"));
const http_status_codes_1 = require("http-status-codes");
const http_errors_1 = __importStar(require("http-errors"));
const config_1 = __importDefault(require("config"));
function convertProductToImageUrl(product) {
    const productWithImageUrl = Object.assign(Object.assign({}, product), { price: Number(product.price), imageUrl: `${config_1.default.get('app.protocol')}://${config_1.default.get('app.host')}:${config_1.default.get('app.port')}/images/${product.imageName}` });
    delete productWithImageUrl.imageName;
    return productWithImageUrl;
}
const getAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // throw new Error('custom error')
        const products = yield (0, factory_1.default)().getAll();
        res.json(products.map(convertProductToImageUrl));
    }
    catch (err) {
        next(err);
    }
});
exports.getAll = getAll;
const getOne = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, factory_1.default)().getOne(+req.params.id);
        if (!product)
            return next();
        res.json(convertProductToImageUrl(product));
    }
    catch (err) {
        next(err);
    }
});
exports.getOne = getOne;
const add = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield (0, factory_1.default)().add(req.body);
        res.status(http_status_codes_1.StatusCodes.CREATED).json(convertProductToImageUrl(product));
    }
    catch (err) {
        next(err);
    }
});
exports.add = add;
const update = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        console.log(req.body);
        const updatedProduct = Object.assign({ id }, req.body);
        const product = yield (0, factory_1.default)().update(updatedProduct);
        res.json(convertProductToImageUrl(product));
    }
    catch (err) {
        next(err);
    }
});
exports.update = update;
const patch = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = +req.params.id;
        const existingProduct = yield (0, factory_1.default)().getOne(id);
        const updatedProduct = Object.assign(Object.assign({}, existingProduct), req.body);
        const product = yield (0, factory_1.default)().update(updatedProduct);
        res.json(convertProductToImageUrl(product));
    }
    catch (err) {
        next(err);
    }
});
exports.patch = patch;
const remove = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const isDeleted = yield (0, factory_1.default)().delete(+req.params.id);
        if (!isDeleted)
            return next((0, http_errors_1.default)((0, http_errors_1.NotFound)(`tried to delete unexisting product with id ${req.params.id}`)));
        res.sendStatus(http_status_codes_1.StatusCodes.NO_CONTENT);
    }
    catch (err) {
        next(err);
    }
});
exports.remove = remove;
