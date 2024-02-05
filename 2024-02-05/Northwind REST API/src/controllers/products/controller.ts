import { NextFunction, Request, Response } from "express";
import getModel from "../../models/product/factory"
import { StatusCodes } from 'http-status-codes';
import createHttpError from "http-errors";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // throw new Error('custom error')
        const products = await getModel().getAll();
        res.json(products);
    } catch (err) {
        next(err);
    }
}

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await getModel().getOne(+req.params.id);
        if (!product) return next();
        res.json(product);
    } catch (err) {
        next(err)
    }
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = await getModel().add(req.body);
        res.status(StatusCodes.CREATED).json(product);
    } catch (err) {
        next(err)
    }
}

export const update = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const updatedProduct = {id, ...req.body}
        const product = await getModel().update(updatedProduct);
        res.json(product);
    } catch (err) {
        next(err)
    }

}

export const patch = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const existingProduct = await getModel().getOne(id);
        const updatedProduct = {...existingProduct, ...req.body};
        const product = await getModel().update(updatedProduct);
        res.json(product);
    } catch (err) {
        next(err)
    }
}

export const remove = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const isDeleted = await getModel().delete(+req.params.id)
        if(!isDeleted) return next();
        res.sendStatus(StatusCodes.NO_CONTENT)
    } catch (err) {
        next(err)
    }
}