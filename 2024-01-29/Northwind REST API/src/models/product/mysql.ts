import DTO from "./dto";
import Model from "./model";

class Product implements Model {
    public async getAll(): Promise<DTO[]> {
        return [
            {
                id: 1,
                name: 'chai',
                price: 6,
                stock: 8
            }
        ]
    }

    public async getOne(): Promise<DTO> {
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