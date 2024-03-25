"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const mysql2_1 = __importDefault(require("mysql2"));
const util_1 = require("util");
const config_1 = __importDefault(require("config"));
exports.pool = mysql2_1.default.createPool({
    connectionLimit: config_1.default.get('mysql.connectionLimit'),
    host: config_1.default.get('mysql.host'),
    user: config_1.default.get('mysql.user'),
    password: config_1.default.get('mysql.password'),
    database: config_1.default.get('mysql.database'),
    port: config_1.default.get('mysql.port')
});
const query = (0, util_1.promisify)(exports.pool.query).bind(exports.pool);
exports.default = query;
