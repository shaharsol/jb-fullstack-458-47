"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const input_validation_1 = __importDefault(require("../middlewares/input-validation"));
const validator_1 = require("../controllers/auth/validator");
const controller_1 = require("../controllers/auth/controller");
const enforce_guest_1 = __importDefault(require("../middlewares/enforce-guest"));
const router = (0, express_1.Router)();
router.use(enforce_guest_1.default);
router.post('/register', (0, input_validation_1.default)(validator_1.signupValidator), controller_1.signup);
router.post('/login', (0, input_validation_1.default)(validator_1.loginValidator), controller_1.login);
exports.default = router;
