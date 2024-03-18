import { NextFunction, Request, Response } from "express";
import striptags from 'striptags';

export default function stripTags(request: Request, response: Response, next: NextFunction) {
    /*
    req.body = {
        name: 'Bart',
        message: '<script>alert("hello")</script>' // striptags will convert this to alert("hello")
    }
    */

    const entries = Object.entries(request.body);
    // console.log(entries);
    // [ [ 'name', 'Bart' ], [ 'message', '<script>alert("hello")</script>' ] ]
    const stripped = entries.map(([key, value]) => [key, striptags(value as string)])
    // console.log(stripped);
    request.body = Object.fromEntries(stripped);
    // console.log(request.body)

    next()

}
