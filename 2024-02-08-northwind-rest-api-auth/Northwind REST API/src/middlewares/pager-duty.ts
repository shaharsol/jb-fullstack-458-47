import { NextFunction, Request, Response } from "express";

export const pagerDuty = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log('doing a pager duty call')
    next(err)
}