import { NextFunction, Request, Response } from "express";
import getModel from "../../models/auth/factory";
import { StatusCodes } from "http-status-codes";
import { generateJWT } from "../../utils/crypto";
import config from 'config';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getModel().signup(req.body);
        const jwt = generateJWT(user, config.get<string>('app.jwt.secret'), config.get<string>('app.jwt.expires'))
        res.status(StatusCodes.CREATED).json({ jwt });
    } catch (err) {
        next(err)
    }
}