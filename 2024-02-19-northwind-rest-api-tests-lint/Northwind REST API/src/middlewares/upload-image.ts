import { NextFunction, Request, Response } from "express";
import { v4 } from "uuid";
import path from 'path';
import { UploadedFile } from "express-fileupload";
import { promisify } from "util";
import config from "config";

export default async function uploadImage(req: Request, res: Response, next: NextFunction) {
    if(!req.body.image) return next();
    
    const image = req.body.image as UploadedFile;

    // tofu.jpg
    // tofu.jpg.jpg.png.jpg
    const imageName = `${v4()}${path.extname(image.name)}`;

    // save image somewhere
    const mvPromisifed = promisify(image.mv).bind(image);
    try {
        const fileAbsoultePath = path.join(config.get<string>('app.images.path'), imageName);
        await mvPromisifed(fileAbsoultePath);
        req.body.imageName = imageName;
        return next();
    } catch (err) {
        next(err)
    }

}