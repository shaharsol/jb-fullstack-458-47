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
exports.login = exports.signup = void 0;
const factory_1 = __importDefault(require("../../models/auth/factory"));
const http_status_codes_1 = require("http-status-codes");
const crypto_1 = require("../../utils/crypto");
const config_1 = __importDefault(require("config"));
const http_errors_1 = __importStar(require("http-errors"));
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, factory_1.default)().signup(req.body);
        const jwt = (0, crypto_1.generateJWT)(user, config_1.default.get('app.jwt.secret'), config_1.default.get('app.jwt.expires'));
        res.status(http_status_codes_1.StatusCodes.CREATED).json({ jwt });
    }
    catch (err) {
        // we need to examine the err to see if it really the duplicate username error
        // if not, we need to raise another error
        next((0, http_errors_1.default)((0, http_errors_1.Unauthorized)(http_status_codes_1.ReasonPhrases.UNAUTHORIZED)));
    }
});
exports.signup = signup;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, factory_1.default)().login(req.body);
        if (!user)
            return next((0, http_errors_1.default)((0, http_errors_1.Unauthorized)('did not find such a combination of username and password')));
        const jwt = (0, crypto_1.generateJWT)(user, config_1.default.get('app.jwt.secret'), config_1.default.get('app.jwt.expires'));
        res.json({ jwt });
    }
    catch (err) {
        next((0, http_errors_1.default)((0, http_errors_1.Unauthorized)(http_status_codes_1.ReasonPhrases.UNAUTHORIZED)));
    }
});
exports.login = login;
