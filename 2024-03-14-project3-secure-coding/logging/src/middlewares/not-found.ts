import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import logger from "../utils/logger";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
    logger.error('not found on ' + req.originalUrl);
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
}