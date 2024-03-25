"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
router.get('/tofu.jpg', (req, res, next) => {
    const absolutePath = path_1.default.join(__dirname, '../assets/images/tofu.jpg');
    res.sendFile(absolutePath);
});
router.get('/:filename', (req, res, next) => {
    const absolutePath = path_1.default.join(__dirname, `../assets/images/${req.params.filename}`);
    res.sendFile(absolutePath);
});
exports.default = router;
