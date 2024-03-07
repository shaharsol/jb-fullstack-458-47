import express from "express";
import audiencesRouter from './routers/audiences';
import gamesRouter from './routers/games';
import config from 'config';
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());

server.use('/api/audiences', audiencesRouter);
server.use('/api/games', gamesRouter);

// special middleware for not found error
server.use(notFound)

// error middlewares
server.use(errorHandler)

export default server;
