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
const app_1 = __importDefault(require("../app"));
const supertest_1 = __importDefault(require("supertest"));
const mysql_1 = require("../db/mysql");
describe('test products router', () => {
    beforeAll(() => {
        // load some data to the database
    });
    afterAll(() => {
        // delete the data from the database
        mysql_1.pool.end();
    });
    describe('test /api/products endpoint', () => {
        test('it should return an array of products', () => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield (0, supertest_1.default)(app_1.default).get('/api/products');
            expect(result.statusCode).toBe(200);
            expect(Array.isArray(result.body)).toBeTruthy();
            expect(result.body[0]).toHaveProperty('id');
            expect(result.body[0]).toHaveProperty('name');
            expect(result.body[0]).toHaveProperty('price');
            expect(result.body[0]).toHaveProperty('stock');
            expect(result.body[0]).toHaveProperty('imageUrl');
        }));
    });
});
