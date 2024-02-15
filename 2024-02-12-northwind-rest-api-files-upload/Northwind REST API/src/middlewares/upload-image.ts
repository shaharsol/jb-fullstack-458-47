import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import path from 'path';
import { UploadedFile } from "express-fileupload";

export default function uploadImage(req: Request, res: Response, next: NextFunction) {
    if(!req.body.image) return next();
    
    const image = req.body.image as UploadedFile;

    // tofu.jpg
    // tofu.jpg.jpg.png.jpg
    const imageName = `${v4()}${path.extname(image.name)}`;

    req.body.imageName = imageName;
    return next();

}