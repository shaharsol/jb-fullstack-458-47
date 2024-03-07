import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

class Audience implements Model {

    public async getAll(): Promise<DTO[]> {
        const audiences = await query(`
            SELECT  id,
                    name
            FROM    audiences  
        `);
        return audiences;
    }
}

const audience = new Audience();
export default audience;