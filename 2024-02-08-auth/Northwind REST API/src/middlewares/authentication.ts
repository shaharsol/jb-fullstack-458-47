import config from "config";
import { NextFunction, Request, Response } from "express";
import createHttpError, { Unauthorized } from "http-errors";
import { JwtPayload, verify } from "jsonwebtoken";
import userDTO from '../models/auth/user-dto';

declare global {
    namespace Express {
        export interface Request {
            user: userDTO
        }
    }
}

export default function authentication (req: Request, res: Response, next: NextFunction) {
    const header = req.header('authorization');
    if (!header) return next();
    // if we're here, we have an authorization header
    // we expect it to look something like: 'Bearer dsdhgfsdhfgsdhgfhsdfgsdhg'
    const token = header.split(' ')[1];
    // this creates an array ['Bearer','dsdhgfsdhfgsdhgfhsdfgsdhg'] and will take the 2nd element
    try {
        const { user } = verify(token, config.get<string>('app.jwt.secret')) as JwtPayload;
        req.user = user;
        return next();
    } catch (err) {
        return next(createHttpError(Unauthorized(err.message || err)));
    }

}