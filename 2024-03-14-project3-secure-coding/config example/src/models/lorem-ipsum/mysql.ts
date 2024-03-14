import Model from "./model";
import DTO from './dto';
import Pagination from './pagination';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

class LoremIpsum implements Model {

    public async loremIpsum(loremIpsum: DTO): Promise<DTO> {

        const sqlParams = [];
        let sql = `
            SELECT  *
            FROM    vacations
            WHERE   1 = 1
        `

        if (loremIpsum.isFollowing) {
            sql += ' AND destination like ?'
            sqlParams.push('%ra%')
        }

        const result = await query(sql, sqlParams);
        return result;
    }

    public async list(pagination: Pagination): Promise<DTO[]> {
        const { offset, limit } = pagination;
        const result = await query(`
            SELECT  *
            FROM    vacations
            LIMIT   ? 
            OFFSET  ?
        `, [Number(limit), Number(offset)]);
        return result;
    }

}

const loremIpsum = new LoremIpsum();
export default loremIpsum;