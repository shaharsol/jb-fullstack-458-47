"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLogger = void 0;
const errorLogger = (err, req, res, next) => {
    console.log(err);
    next(err);
};
exports.errorLogger = errorLogger;
