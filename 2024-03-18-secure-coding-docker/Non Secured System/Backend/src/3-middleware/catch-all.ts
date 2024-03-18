import { NextFunction, Request, Response } from "express";

function catchAll(err: any, request: Request, response: Response, next: NextFunction) {

    const status = err.status || 500;

    console.log(err);

    response.status(status).send(err.message);
}

export default catchAll;
