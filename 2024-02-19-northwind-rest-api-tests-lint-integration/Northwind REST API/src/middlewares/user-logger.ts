import { NextFunction, Request, Response } from "express";

export default function userLogger(req: Request, res: Response, next: NextFunction) {
    const username = req.user ? req.user.username : 'Anonymous'
    console.log(`user ${username} accessed ${req.method}:${req.url}`);
    return next();
}