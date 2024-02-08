import Joi from "joi"
import DTO from "../../models/product/dto"

export const addProductValidator = Joi.object<DTO>({
    name: Joi.string().alphanum().min(4).lowercase().required(),
    price: Joi.number().min(1).max(1000).required(),
    stock: Joi.number().min(0).max(1000).default(0)
});

export const putProductValidator = addProductValidator;

export const patchProductValidator = Joi.object<DTO>({
    name: Joi.string().alphanum().min(4).lowercase(),
    price: Joi.number().min(1).max(1000),
    stock: Joi.number().min(0).max(1000)
});