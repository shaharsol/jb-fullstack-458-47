import { NextFunction, Request, Response } from "express";
import getModel from "../../models/auth/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import { generateJWT } from "../../utils/crypto";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";


export const signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getModel().signup(req.body);
        const jwt = generateJWT(user, config.get<string>('app.jwt.secret'), config.get<string>('app.jwt.expires'))
        res.status(StatusCodes.CREATED).json({ jwt });
    } catch (err) {
        // we need to examine the err to see if it really the duplicate username error
        // if not, we need to raise another error
        next(createHttpError(Unauthorized(ReasonPhrases.UNAUTHORIZED)))
    }
}

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getModel().login(req.body);
        if (!user) return next(createHttpError(Unauthorized('did not find such a combination of username and password')))
        const jwt = generateJWT(user, config.get<string>('app.jwt.secret'), config.get<string>('app.jwt.expires'))
        res.json({ jwt });
    } catch (err) {
        next(createHttpError(Unauthorized(ReasonPhrases.UNAUTHORIZED)))
    }
}