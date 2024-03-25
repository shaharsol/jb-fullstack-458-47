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
const config_1 = __importDefault(require("config"));
const http_errors_1 = __importStar(require("http-errors"));
const jsonwebtoken_1 = require("jsonwebtoken");
const factory_1 = __importDefault(require("../models/auth/factory"));
function authentication(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const header = req.header('authorization');
        if (!header)
            return next();
        // if we're here, we have an authorization header
        // we expect it to look something like: 'Bearer dsdhgfsdhfgsdhgfhsdfgsdhg'
        const token = header.split(' ')[1];
        // this creates an array ['Bearer','dsdhgfsdhfgsdhgfhsdfgsdhg'] and will take the 2nd element
        try {
            // user roleId = 2
            // he did login
            // we had a jwt with roleId 2
            // we changed the database record to roleId = 1
            // we tried to delete again with THE SAME OLD jwt
            // in the old jwt the roleId was still 2 (USER)
            // so instead of using the jwt for the user record
            // we use only user.id to fetch the user again from the database
            const { user } = (0, jsonwebtoken_1.verify)(token, config_1.default.get('app.jwt.secret'));
            req.user = yield (0, factory_1.default)().getOne(user.id);
            return next();
        }
        catch (err) {
            return next((0, http_errors_1.default)((0, http_errors_1.Unauthorized)(err.message || err)));
        }
    });
}
exports.default = authentication;
