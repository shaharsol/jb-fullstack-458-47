import { NextFunction, Request, Response } from "express";
import getModel from "../../models/gifts/factory";
import { StatusCodes } from 'http-status-codes';

export const getAllByAudience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const gifts = await getModel().getAllByAudience(+req.params.audienceId);
        res.json(gifts);
    } catch (err) {
        next(err)
    }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const newGift = await getModel().add(req.body);
        res.status(StatusCodes.CREATED).json(newGift);
    } catch (err) {
        next(err)
    }
}