import Joi from "joi"
import DTO from "../../models/product/dto"

export const addProductValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    name: Joi.string().alphanum().min(4).lowercase().required(),
    price: Joi.number().min(1).max(1000).required(),
    stock: Joi.number().min(0).max(1000).default(0),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});

export const putProductValidator = addProductValidator;

export const patchProductValidator = Joi.object<DTO>({
    id: Joi.number().optional(),
    name: Joi.string().alphanum().min(4).lowercase(),
    price: Joi.number().min(1).max(1000),
    stock: Joi.number().min(0).max(1000),
    image: Joi.object({
        mimetype: Joi.string().valid('image/jpg', 'image/jpeg', 'image/png'),
    }).unknown(true).optional()
});