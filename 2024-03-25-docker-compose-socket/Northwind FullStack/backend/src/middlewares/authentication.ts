import config from "config";
import { NextFunction, Request, Response } from "express";
import createHttpError, { Unauthorized } from "http-errors";
import { JwtPayload, verify } from "jsonwebtoken";
import userDTO from '../models/auth/user-dto';
import getModel from "../models/auth/factory";

declare global {
    namespace Express {
        export interface Request {
            user: userDTO
        }
    }
}

export default async function authentication (req: Request, res: Response, next: NextFunction) {
    const header = req.header('authorization');
    if (!header) return next();
    // if we're here, we have an authorization header
    // we expect it to look something like: 'Bearer dsdhgfsdhfgsdhgfhsdfgsdhg'
    const token = header.split(' ')[1];
    // this creates an array ['Bearer','dsdhgfsdhfgsdhgfhsdfgsdhg'] and will take the 2nd element
    try {
        // user roleId = 2
        // he did login
        // we had a jwt with roleId 2
        // we changed the database record to roleId = 1
        // we tried to delete again with THE SAME OLD jwt
        // in the old jwt the roleId was still 2 (USER)
        // so instead of using the jwt for the user record
        // we use only user.id to fetch the user again from the database
        const { user } = verify(token, config.get<string>('app.jwt.secret')) as JwtPayload;
        req.user = await getModel().getOne(user.id);
        return next();
    } catch (err) {
        return next(createHttpError(Unauthorized(err.message || err)));
    }

}