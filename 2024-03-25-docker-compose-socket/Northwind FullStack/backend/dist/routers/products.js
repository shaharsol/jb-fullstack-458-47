"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("../controllers/products/controller");
const input_validation_1 = __importDefault(require("../middlewares/input-validation"));
const validator_1 = require("../controllers/products/validator");
const enforce_admin_1 = __importDefault(require("../middlewares/enforce-admin"));
const add_image_to_body_1 = __importDefault(require("../middlewares/add-image-to-body"));
const upload_image_1 = __importDefault(require("../middlewares/upload-image"));
const router = (0, express_1.Router)();
// router.get('/', getAll) = router.use('GET','/',getAll)
router.get('/', controller_1.getAll);
router.get('/:id([0-9]+)', controller_1.getOne);
router.post('/', add_image_to_body_1.default, (0, input_validation_1.default)(validator_1.addProductValidator), upload_image_1.default, controller_1.add);
router.put('/:id([0-9]+)', add_image_to_body_1.default, (0, input_validation_1.default)(validator_1.putProductValidator), upload_image_1.default, controller_1.update);
router.patch('/:id([0-9]+)', add_image_to_body_1.default, (0, input_validation_1.default)(validator_1.patchProductValidator), upload_image_1.default, controller_1.patch);
router.delete('/:id([0-9]+)', enforce_admin_1.default, controller_1.remove);
exports.default = router;
