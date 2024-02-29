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

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isDeleted = await getModel().delete(+req.params.id);
        if (isDeleted) return res.sendStatus(StatusCodes.NO_CONTENT);
        res.status(StatusCodes.NOT_FOUND).json({success: false})
    } catch (err) {
        next(err)
    }
}