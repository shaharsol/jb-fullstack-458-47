import config from "config";
import { NextFunction, Request, Response } from "express";
import createHttpError, { Forbidden } from "http-errors";
import { ReasonPhrases } from 'http-status-codes';

export default function enforceGuest (req: Request, res: Response, next: NextFunction) {
    // if(req.user) return next(createHttpError(Forbidden(ReasonPhrases.FORBIDDEN)));
    return next()
}