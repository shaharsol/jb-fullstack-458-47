"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routers/auth"));
const products_1 = __importDefault(require("./routers/products"));
const categories_1 = __importDefault(require("./routers/categories"));
const config_1 = __importDefault(require("config"));
const not_found_1 = require("./middlewares/not-found");
const error_handler_1 = require("./middlewares/error-handler");
const error_logger_1 = require("./middlewares/error-logger");
const pager_duty_1 = require("./middlewares/pager-duty");
const user_logger_1 = __importDefault(require("./middlewares/user-logger"));
const authentication_1 = __importDefault(require("./middlewares/authentication"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
// server.use(cors({origin: ['http://localhost:3000', 'http://localhost:3001']}));
server.use(authentication_1.default);
server.use(user_logger_1.default);
server.use(express_1.default.json());
server.use((0, express_fileupload_1.default)());
server.use('/api', auth_1.default);
server.use('/api/products', products_1.default);
server.use('/api/categories', categories_1.default);
// server.use('/images', imagesRouter)
server.use('/images', express_1.default.static(path_1.default.resolve(config_1.default.get('app.images.path'))));
server.use('/css', express_1.default.static('src/assets/css'));
// special middleware for not found error
server.use(not_found_1.notFound);
// error middlewares
server.use(error_logger_1.errorLogger);
server.use(pager_duty_1.pagerDuty);
server.use(error_handler_1.errorHandler);
exports.default = server;
