import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    /*
    {
        status: 400,
        message: 'something is wrong with the input'
    }
    */
    res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).send(err.message || ReasonPhrases.INTERNAL_SERVER_ERROR)
}