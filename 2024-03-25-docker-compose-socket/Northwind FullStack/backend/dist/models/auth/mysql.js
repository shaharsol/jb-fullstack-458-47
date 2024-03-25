"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_dto_1 = require("./user-dto");
const mysql_1 = __importDefault(require("../../db/mysql"));
const config_1 = __importDefault(require("config"));
const crypto_1 = require("../../utils/crypto");
class User {
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // id = '"3"; drop table users;' 
            const user = (yield (0, mysql_1.default)(`
            SELECT  userId AS id,
                    username as email,
                    password,
                    firstName,
                    lastName,
                    roleId
            FROM    users  
            WHERE   userId = ?
        `, [id]))[0];
            return user;
        });
    }
    login(credentials) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = credentials;
            const user = (yield (0, mysql_1.default)(`
            SELECT  userId AS id,
                    username as email,
                    password,
                    firstName,
                    lastName,
                    roleId
            FROM    users  
            WHERE   username = ?
            AND     password = ?
        `, [email, (0, crypto_1.hashPassword)(password, config_1.default.get('app.secret'))]))[0];
            return user;
        });
    }
    signup(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const { firstName, lastName, email, password } = user;
            const result = yield (0, mysql_1.default)(`
            INSERT INTO users(firstName, lastName, username, password, roleId) 
            VALUES(?,?,?,?,?) 
        `, [firstName, lastName, email, (0, crypto_1.hashPassword)(password, config_1.default.get('app.secret')), user_dto_1.Roles.USER]);
            return this.getOne(result.insertId);
        });
    }
}
const user = new User();
exports.default = user;
