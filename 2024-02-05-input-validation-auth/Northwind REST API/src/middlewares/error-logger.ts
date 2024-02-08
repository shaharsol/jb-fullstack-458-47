import { NextFunction, Request, Response } from "express";

export const errorLogger = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    next(err)
}