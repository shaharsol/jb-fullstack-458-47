import { NextFunction, Request, Response, Router } from "express";
import enforceAuth from '../middlewares/enforce-auth';

const router = Router();
router.use(enforceAuth)

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({success: true})
})

export default router;