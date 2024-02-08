import config from "config";
import { NextFunction, Request, Response } from "express";
import createHttpError, { Unauthorized } from "http-errors";
import { verify } from "jsonwebtoken";

export default function enforceAuth (req: Request, res: Response, next: NextFunction) {
    const header = req.header('authorization');
    if (!header) return next(createHttpError(Unauthorized('missing authorization header')));
    // if we're here, we have an authorization header
    // we expect it to look something like: 'Bearer dsdhgfsdhfgsdhgfhsdfgsdhg'
    const token = header.split(' ')[1];
    // this creates an array ['Bearer','dsdhgfsdhfgsdhgfhsdfgsdhg'] and will take the 2nd element
    try {
        verify(token, config.get<string>('app.jwt.secret'));
        return next();
    } catch (err) {
        return next(createHttpError(Unauthorized(err.message || err)));
    }

}