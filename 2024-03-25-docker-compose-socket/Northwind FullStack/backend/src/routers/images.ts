import { NextFunction, Request, Response, Router } from "express";
import path from 'path';

const router = Router();

router.get('/tofu.jpg', (req: Request, res: Response, next: NextFunction) =>{
    const absolutePath = path.join(__dirname, '../assets/images/tofu.jpg');
    res.sendFile(absolutePath);
})

router.get('/:filename', (req: Request, res: Response, next: NextFunction) =>{
    const absolutePath = path.join(__dirname, `../assets/images/${req.params.filename}`);
    res.sendFile(absolutePath);
})


export default router;
