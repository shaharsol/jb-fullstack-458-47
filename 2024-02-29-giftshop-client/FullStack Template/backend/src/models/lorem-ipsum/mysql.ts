import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

class LoremIpsum implements Model {

    public async loremIpsum(loremIpsum: DTO): Promise<DTO> {
        // const user = (await query(`
        //     SELECT  userId AS id,
        //             username as email,
        //             password,
        //             firstName,
        //             lastName,
        //             roleId
        //     FROM    users  
        //     WHERE   userId = ?
        // `, [id]))[0];
        // return user;
    }
}

const loremIpsum = new LoremIpsum();
export default loremIpsum;