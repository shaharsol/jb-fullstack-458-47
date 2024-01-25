import express, {NextFunction, Request, Response} from "express";
import { v4 } from 'uuid';

const products = [
    {id: '32de2f51-2be0-41f1-bf97-ec6bf0322d4f', name: 'chai', price: 6.00, stock: 100},
    {id: '32de2f51-2be0-41f1-bf97-ec6bf0322d4g', name: 'coffee', price: 5.00, stock: 200},
    {id: '32de2f51-2be0-41f1-bf97-ec6bf0322d4d', name: 'hot chocolate', price: 10.00, stock: 300},
]

const server = express();

// middlewares start here

// express.json is an express provided middleware that does the following:
// 1. it checks if the request headers contain: Content-Type: application/json
// 2. if so, it created a json object in req.body
server.use(express.json());

server.get('*', (req: Request, res: Response, next: NextFunction) => {
    console.log('received a GET request');
    next();
})

server.get('/api/products', (req: Request, res: Response, next: NextFunction) => {
    res.json(products)
});

server.get('/api/products/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const product = products.find(p => p.id === id);
    res.json(product)
});

server.post('/api/products', (req: Request, res: Response, next: NextFunction) => {
    const id = v4();
    const product = {id, ...req.body};
    products.push(product);
    res.json(product);
})

server.put('/api/products/:id', (req: Request, res: Response, next: NextFunction) => {
    const index = products.findIndex(p => p.id === req.params.id);
    
    const id = {
        id: req.params.id
    }

    products[index] = {...id, ...req.body};

    res.json(products[index]);
})

// middlewares end here

server.listen(8080, () => {
    console.log('server started on localhost://8080');
})