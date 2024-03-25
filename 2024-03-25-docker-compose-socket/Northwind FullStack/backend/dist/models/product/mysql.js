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
const mysql_1 = __importDefault(require("../../db/mysql"));
class Product {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield (0, mysql_1.default)(`
            SELECT  ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock,
                    ImageName AS imageName
            FROM    products
        `);
            return products;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // id = '"3"; drop table users;' 
            const products = yield (0, mysql_1.default)(`
            SELECT  ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock,
                    ImageName AS imageName
            FROM    products  
            WHERE   ProductID = ?
        `, [id]);
            return products[0];
        });
    }
    add(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, stock, imageName } = product;
            const result = yield (0, mysql_1.default)(`
            INSERT INTO products(ProductName, UnitPrice, UnitsInStock, ImageName) 
            VALUES(?,?,?,?) 
        `, [name, price, stock, imageName]);
            return this.getOne(result.insertId);
        });
    }
    update(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, price, stock, imageName } = product;
            yield (0, mysql_1.default)(`
            UPDATE  products
            SET     ProductName = ?, 
                    UnitPrice = ?,
                    UnitsInStock = ?,
                    ImageName = ?
            WHERE   ProductID = ?
        `, [name, price, stock, imageName, id]);
            return this.getOne(id);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield (0, mysql_1.default)(`
            DELETE FROM products
            WHERE       ProductID = ?
        `, [id]);
            return Boolean(result.affectedRows);
        });
    }
}
const product = new Product();
exports.default = product;
