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
        return {
                id: 1,
                name: 'chai',
                price: 6,
                stock: 8
            }
    }

}

const product = new Product();
export default product;