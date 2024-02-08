import Joi from "joi"
import UserDTO from '../../models/auth/user-dto';

export const signupValidator = Joi.object<UserDTO>({
    username: Joi.string().regex(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required(),
    password: Joi.string().min(6).required(),
    firstName: Joi.string().min(2).max(20).required(),
    lastName: Joi.string().min(2).max(20).required()
});