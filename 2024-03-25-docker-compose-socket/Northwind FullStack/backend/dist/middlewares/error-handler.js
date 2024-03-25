"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
    /*
    {
        status: 400,
        message: 'something is wrong with the input'
    }
    */
    res.status(err.status || http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send(err.message || http_status_codes_1.ReasonPhrases.INTERNAL_SERVER_ERROR);
};
exports.errorHandler = errorHandler;
