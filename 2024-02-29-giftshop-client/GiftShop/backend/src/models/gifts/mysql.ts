import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

class Gift implements Model {

    public async getAllByAudience(audienceId: number): Promise<DTO[]> {
        const gifts = await query(`
            SELECT  id,
                    audienceId,
                    name,
                    description,
                    price,
                    discount
            FROM    gifts  
            WHERE   audienceId = ?
        `, [audienceId]);
        return gifts;
    }

    public async getOne(id: number): Promise<DTO> {
        const gift = (await query(`
            SELECT  id,
                    audienceId,
                    name,
                    description,
                    price,
                    discount
            FROM    gifts  
            WHERE   id = ?
        `, [id]))[0];
        return gift;
    }

    public async add(gift: DTO): Promise<DTO> {
        const {
            audienceId,
            name,
            description,
            price,
            discount
        } = gift;
        const result: OkPacketParams = await query(`
            INSERT INTO gifts (audienceId, name, description, price, discount)
            VALUES (?, ?, ?, ?, ?)
        `, [audienceId, name, description, price, discount]);
        return this.getOne(result.insertId);
    }

    public async delete(id: number): Promise<boolean> {
        const result: OkPacketParams = await query(`
            DELETE FROM gifts
            WHERE id = ?
        `, [id]);
        return result.affectedRows !== 0;
    }

}

const gift = new Gift();
export default gift;