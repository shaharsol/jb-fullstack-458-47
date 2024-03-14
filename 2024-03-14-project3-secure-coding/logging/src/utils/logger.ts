import winston from 'winston';

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.DataDog({
            filename: 'error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'combined.log',
        }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.json(),
    }))
}

export default logger;