import config from "config";
import { NextFunction, Request, Response } from "express";
import createHttpError, { Forbidden, Unauthorized } from "http-errors";
import { ReasonPhrases } from 'http-status-codes';
import { Roles } from "../models/auth/user-dto";

export default function enforceAdmin (req: Request, res: Response, next: NextFunction) {
    if (!req.user) return next(createHttpError(Unauthorized(ReasonPhrases.UNAUTHORIZED)));
    if (req.user.roleId !== Roles.ADMIN) return next(createHttpError(Forbidden(ReasonPhrases.FORBIDDEN)));
    return next()
}