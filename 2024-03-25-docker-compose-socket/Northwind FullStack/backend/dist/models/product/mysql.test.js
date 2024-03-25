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
const path_1 = __importDefault(require("path"));
process.env['NODE_CONFIG_DIR'] = path_1.default.resolve(__dirname, '../../config/');
const mysql_1 = __importDefault(require("./mysql"));
const mysql_2 = __importDefault(require("../../db/mysql"));
const uuid_1 = require("uuid");
jest.mock('../../db/mysql', () => (Object.assign(Object.assign({}, jest.requireActual('../../db/mysql')), { __esModule: true, default: jest.fn() })));
describe('test products mysql implementation', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });
    describe('test getOne', () => {
        test('if it gets an id=1, it should return a product with id=1', () => __awaiter(void 0, void 0, void 0, function* () {
            const id = 1;
            const name = (0, uuid_1.v4)();
            const price = 999;
            const stock = 999;
            const imageName = (0, uuid_1.v4)();
            const id2 = 2;
            const name2 = (0, uuid_1.v4)();
            const price2 = 9999;
            const stock2 = 9999;
            const imageName2 = (0, uuid_1.v4)();
            mysql_2.default.mockResolvedValue([{
                    id,
                    name,
                    price,
                    stock,
                    imageName
                }, {
                    id2,
                    name2,
                    price2,
                    stock2,
                    imageName2
                }]);
            const result = yield mysql_1.default.getOne(id);
            expect(result).toMatchObject({
                id,
                name,
                price,
                stock,
                imageName
            });
        }));
    });
    describe('test getAll', () => {
    });
    describe('test add', () => {
    });
});
