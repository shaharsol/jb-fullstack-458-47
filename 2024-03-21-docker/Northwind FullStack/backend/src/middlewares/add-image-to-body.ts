import { NextFunction, Request, Response } from "express";

export default function addImageToBody(req: Request, res: Response, next: NextFunction) {
    if (req.files?.image) {
        req.body.image = req.files?.image;
    }
    return next();
}