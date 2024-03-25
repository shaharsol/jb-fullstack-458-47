"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function userLogger(req, res, next) {
    const username = req.user ? req.user.email : 'Anonymous';
    console.log(`user ${username} accessed ${req.method}:${req.url}`);
    return next();
}
exports.default = userLogger;
