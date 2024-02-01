import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import DTO from "./dto";
import Model from "./model";

class Product implements Model {
    public async getAll(): Promise<DTO[]> {
        const products = await query(`
            SELECT  ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock
            FROM    products
        `)
        return products;
    }

    public async getOne(id: number): Promise<DTO> {
        // id = '"3"; drop table users;'
        const products = await query(`
            SELECT  ProductID AS id,
                    ProductName AS name,
                    UnitPrice AS price,
                    UnitsInStock AS stock
            FROM    products  
            WHERE   ProductID = ?
        `, [id]);
        return products[0];
    }

    public async add(product: DTO): Promise<DTO> {
        const {name, price, stock} = product;
        const result: OkPacketParams = await query(`
            INSERT INTO products(ProductName, UnitPrice, UnitsInStock) 
            VALUES(?,?,?) 
        `, [name, price, stock]);
        return this.getOne(result.insertId);
    }

    public async update(product: DTO): Promise<DTO> {
        const {id, name, price, stock} = product;
        await query(`
            UPDATE  products
            SET     ProductName = ?, 
                    UnitPrice = ?,
                    UnitsInStock = ?
            WHERE   ProductID = ?
        `, [name, price, stock, id]);
        return this.getOne(id);
    }

    public async delete(id: number): Promise<void> {
        await query(`
            DELETE FROM products
            WHERE       ProductID = ?
        `, [id]);
        return;
    }

}

const product = new Product();
export default product;