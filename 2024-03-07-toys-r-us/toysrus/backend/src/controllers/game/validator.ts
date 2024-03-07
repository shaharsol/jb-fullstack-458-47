import Joi from "joi"
import DTO from '../../models/game/dto';

export const addGameValidator = Joi.object<DTO>({
    audienceId: Joi.number().positive().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required()
});
