import { NextFunction, Request, Response } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import logger from "../utils/logger";

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    /*
    {
        status: 400,
        message: 'something is wrong with the input'
    }
    */

    // log the original error message
    console.log(err.message);

    // send the log to some centrelized storage
    logger.error(err.message);


    // override the message with a laconic message in case of production
    let message;
    if (process.env.NODE_ENV === 'production') {
        message = 'something went wrong...';
    } else {
        message = err.message
    }

    // make sure in case of production, no sensitive info is sent to client
    res.status(err.status || StatusCodes.INTERNAL_SERVER_ERROR).send(message || ReasonPhrases.INTERNAL_SERVER_ERROR)
}