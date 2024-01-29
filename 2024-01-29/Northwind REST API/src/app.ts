import express from "express";
import productsRouter from './routers/products';

const server = express();

server.use('/api/products', productsRouter)

server.listen(8080, () => {
    console.log('server is running on localhost:8080')
})
