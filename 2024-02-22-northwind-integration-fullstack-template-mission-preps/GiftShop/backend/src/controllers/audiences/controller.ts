import { NextFunction, Request, Response } from "express";
import getModel from "../../models/audiences/factory";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const audiences = await getModel().getAll();
        res.json(audiences);
    } catch (err) {
        next(err)
    }
}