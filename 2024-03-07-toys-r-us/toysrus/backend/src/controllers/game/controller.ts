import { NextFunction, Request, Response } from "express";
import getModel from "../../models/game/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";

export const getAllForAudience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const games = await getModel().getAllForAudience(+req.params.audienceId)
        res.json(games);
    } catch (err) {
        next(err)
    }
}

export const getCheaperThan = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const games = await getModel().getCheaperThan(+req.params.price)
        res.json(games);
    } catch (err) {
        next(err)
    }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const game = await getModel().add(req.body)
        res.status(StatusCodes.CREATED).json(game);
    } catch (err) {
        next(err)
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isDeleted = await getModel().remove(+req.params.id);
        if (isDeleted) return res.status(StatusCodes.NO_CONTENT).send('');
        return res.status(StatusCodes.NOT_FOUND).send('');
    } catch (err) {
        next(err)
    }
}