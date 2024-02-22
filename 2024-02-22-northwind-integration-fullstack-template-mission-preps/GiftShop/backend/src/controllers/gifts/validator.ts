import Joi from "joi"
import DTO from "../../models/gifts/dto"

export const addGiftValidator = Joi.object<DTO>({
    audienceId: Joi.number().positive().required(),
    name: Joi.string().min(4).lowercase().required(),
    description: Joi.string().min(4).lowercase().required(),
    price: Joi.number().min(1).max(9999.99).required(),
    discount: Joi.number().min(0).max(100).required(),
});
