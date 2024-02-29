import { NextFunction, Request, Response } from "express";
import getModel from "../../models/lorem-ipsum/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";

export const loremIpsum = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // logic goes here
    } catch (err) {
        next(err)
    }
}