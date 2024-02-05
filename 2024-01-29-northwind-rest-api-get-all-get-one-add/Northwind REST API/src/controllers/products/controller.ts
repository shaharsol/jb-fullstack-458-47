import { NextFunction, Request, Response } from "express";
import getModel from "../../models/product/factory"

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    const products = await getModel().getAll();
    res.json(products);
}

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
    const product = await getModel().getOne(+req.params.id);
    res.json(product);
}

export const add = async (req: Request, res: Response, next: NextFunction) => {
    const product = await getModel().add(req.body);
    res.json(product);
}
