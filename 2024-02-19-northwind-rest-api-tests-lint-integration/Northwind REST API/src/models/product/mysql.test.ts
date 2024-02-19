import path from 'path'
process.env['NODE_CONFIG_DIR'] = path.resolve(__dirname, '../../config/');
import product from "./mysql"
import query from '../../db/mysql'
import { v4 } from 'uuid';
import { before } from 'node:test';

jest.mock('../../db/mysql', () => ({
    ...jest.requireActual('../../db/mysql'),
    __esModule: true,
    default: jest.fn()
}))

describe('test products mysql implementation', () => {
    afterAll(() => {
        jest.clearAllMocks();
    })

    describe('test getOne', () => {
        test('if it gets an id=1, it should return a product with id=1', async () => {
            const id = 1;
            const name = v4();
            const price = 999;
            const stock = 999;
            const imageName = v4();

            const id2 = 2;
            const name2 = v4();
            const price2 = 9999;
            const stock2 = 9999;
            const imageName2 = v4();

            query.mockResolvedValue([{
                id,
                name,
                price,
                stock,
                imageName
            },{
                id2,
                name2,
                price2,
                stock2,
                imageName2
            }])
            const result = await product.getOne(id);
            expect(result).toMatchObject({
                id,
                name,
                price,
                stock,
                imageName
            })



        })
    })
    describe('test getAll', () => {
    })
    describe('test add', () => {
    })
})