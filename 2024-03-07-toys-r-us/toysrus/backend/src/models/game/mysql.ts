import Model from "./model";
import DTO from './dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";

class Game implements Model {

    async getAllForAudience (audienceId: number): Promise<DTO[]> {
        const games = await query(`
            SELECT  id,
                    audienceId,
                    name,
                    description,
                    price
            FROM    games  
            WHERE   audienceId = ?
        `, [ audienceId ]);
        return games;
    }

    async getCheaperThan (price: number): Promise<DTO[]> {
        const games = await query(`
            SELECT  id,
                    audienceId,
                    name,
                    description,
                    price
            FROM    games  
            WHERE   price <= ?
        `, [ price ]);
        return games;
    }
    
    async getOne (id: number): Promise<DTO> {
        const game = (await query(`
            SELECT  id,
                    audienceId,
                    name,
                    description,
                    price
            FROM    games  
            WHERE   id = ?
        `, [ id ]))[0];
        return game;
    }
    
    async add (game: DTO): Promise<DTO> {
        const {
            audienceId,
            name,
            description,
            price
        } = game;
        const result: OkPacketParams = await query(`
            INSERT INTO games  
            (audienceId, name, description, price)
            VALUES
            (?, ?, ?, ?)
        `, [ audienceId, name, description, price ]);
        return this.getOne(result.insertId);
    }
    
    async remove( id: number): Promise<boolean> {
        const result: OkPacketParams = await query(`
            DELETE FROM games  
            WHERE       id = ?
        `, [ id ]);
        return result.affectedRows > 0;
    }

}

const game = new Game();
export default game;