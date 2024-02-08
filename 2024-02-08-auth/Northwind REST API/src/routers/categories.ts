import { NextFunction, Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({success: true})
})

export default router;