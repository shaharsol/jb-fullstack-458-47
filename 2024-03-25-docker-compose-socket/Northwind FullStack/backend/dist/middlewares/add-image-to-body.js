"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addImageToBody(req, res, next) {
    var _a, _b;
    if ((_a = req.files) === null || _a === void 0 ? void 0 : _a.image) {
        req.body.image = (_b = req.files) === null || _b === void 0 ? void 0 : _b.image;
    }
    return next();
}
exports.default = addImageToBody;
