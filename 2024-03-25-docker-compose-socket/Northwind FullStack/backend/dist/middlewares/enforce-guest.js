"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function enforceGuest(req, res, next) {
    // if(req.user) return next(createHttpError(Forbidden(ReasonPhrases.FORBIDDEN)));
    return next();
}
exports.default = enforceGuest;
