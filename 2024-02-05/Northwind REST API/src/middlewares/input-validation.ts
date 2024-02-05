import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const validate = (validator: Joi.ObjectSchema) => async (req: Request, res: Response, next: NextFunction) => {
    // const [error, data] = validator.validate
    // if(error)
    try {
        /*
        req.body is {
            "name": "HAGAI",
            "price": 6,
            "stock": 100
        }
        */
        const validated = await validator.validateAsync(req.body) // throw new JoiError
        /*
        validated = 
        {
            "name": "hagai",
            "price": 6,
            "stock": 100
        }
        */
        req.body = validated;
        return next();
    } catch (err) {
        if(err.isJoi) { // isJoi is a boolean value set to true that joi adds
            return next(401)
        }
        return next(err)
    }
}

export default validate;