import { NextFunction, Request, Response } from "express";
import getModel from "../../models/lorem-ipsum/factory";
import { StatusCodes, ReasonPhrases } from "http-status-codes";
import config from 'config';
import createHttpError, { Unauthorized } from "http-errors";
import { json2csv } from 'json-2-csv';

export const sendCSV = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // logic goes here

        // let's say I got some database result set here:
        const products = [
            {
                id: 1,
                name: 'chai',
                price: 100,
                stock: 30
            },
            {
                id: 2,
                name: 'chocolate',
                price: 10,
                stock: 300
            },
            {
                id: 3,
                name: 'eggs',
                price: 10,
                stock: 100000
            },
            {
                id: 4,
                name: 'milk',
                price: 8,
                stock: 99
            }
        ];

        /*

        */

        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment;filename=vacations.csv')
        const csv = await json2csv(products, {});

        res.send(csv)
    } catch (err) {
        next(err)
    }
}

export const bar = async (req: Request, res: Response, next: NextFunction) => {
    const result = await getModel().loremIpsum({
        isFollowing: req.query.isFollowing as unknown as boolean,
        didntStart: req.query.didntStart as unknown as boolean,
        onGoing: req.query.onGoing as unknown as boolean,
    })
    res.json(result);
}

export const list = async (req: Request, res: Response, next: NextFunction) => {
    const vacations = await getModel().list({
        offset: req.query.offset as unknown as number,
        limit: req.query.limit as unknown as number
    })
    res.json(vacations);
}
