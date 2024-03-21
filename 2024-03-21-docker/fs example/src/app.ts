import express, {NextFunction, Request, Response} from "express";
import fs from 'fs/promises';

const server = express();

server.get('/save', async (req: Request, res: Response, next: NextFunction) => {
    await fs.writeFile('/db/db.txt', req.query.data as string);
    res.send('success');
});
// added a comment

server.get('/saved', async (req: Request, res: Response, next: NextFunction) => {
    const data = await fs.readFile('/db/db.txt', 'utf-8');
    res.send(data);
});


server.listen(8080, () => {
    console.log('server started on localhost://8080');
})