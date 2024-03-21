"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const products = [
    { id: '32de2f51-2be0-41f1-bf97-ec6bf0322d4f', name: 'chai', price: 6.00, stock: 100 },
    { id: '32de2f51-2be0-41f1-bf97-ec6bf0322d4g', name: 'coffee', price: 5.00, stock: 200 },
    { id: '32de2f51-2be0-41f1-bf97-ec6bf0322d4d', name: 'hot chocolate', price: 10.00, stock: 300 },
];
// added a comment
const server = (0, express_1.default)();
// middlewares start here
// express.json is an express provided middleware that does the following:
// 1. it checks if the request headers contain: Content-Type: application/json
// 2. if so, it created a json object in req.body
server.use(express_1.default.json());
server.get('*', (req, res, next) => {
    console.log('received a GET request');
    next();
});
server.get('/api/products', (req, res, next) => {
    res.json(products);
});
server.get('/api/products', (req, res, next) => {
    console.log('/api/products has been called');
    next();
});
server.get('/api/products/:id', (req, res, next) => {
    const id = req.params.id;
    const product = products.find(p => p.id === id);
    res.json(product);
});
server.post('/api/products', (req, res, next) => {
    const id = (0, uuid_1.v4)();
    const product = Object.assign({ id }, req.body);
    products.push(product);
    res.json(product);
});
server.put('/api/products/:id', (req, res, next) => {
    /*
    original product:
    {
        id: 1,
        name: 'chai',
        price: 6
    }
    req.body:
    {
        name: 'coffee'
    }
    {id: req.params.id, ...req.body} :
    {
        id: 1,
        name: 'coffee'
    }
    */
    const index = products.findIndex(p => p.id === req.params.id);
    products[index] = Object.assign({ id: req.params.id }, req.body);
    res.json(products[index]);
});
server.patch('/api/products/:id', (req, res, next) => {
    /*
    original product:
    {
        id: 1,
        name: 'chai',
        price: 6
    }
    req.body:
    {
        name: 'coffee'
    }
    {...products[index], ...req.body} :
    {
        id: 1,
        name: 'coffee',
        price: 6
    }
    */
    const index = products.findIndex(p => p.id === req.params.id);
    const newVersionOfProduct = Object.assign(Object.assign({}, products[index]), req.body);
    products[index] = newVersionOfProduct;
    res.json(products[index]);
});
server.delete('/api/products/:id', (req, res, next) => {
    const index = products.findIndex(p => p.id === req.params.id);
    products.splice(index, 1);
    res.sendStatus(204);
});
// middlewares end here
server.listen(8080, () => {
    console.log('server started on localhost://8080');
});
