import Model from "./model";
import CredentialsDTO from './credentials-dto';
import UserDTO, { Roles } from './user-dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import config from "config";
import { hashPassword } from "../../utils/crypto";
import mysql from 'mysql2';

class User implements Model {

    public async getOne(id: number): Promise<UserDTO> {
        // id = '"3"; drop table users;' 
        const user = (await query(`
            SELECT  userId AS id,
                    username as email,
                    password,
                    firstName,
                    lastName,
                    roleId
            FROM    users  
            WHERE   userId = ?
        `, [id]))[0];
        return user;
    }

    public async login(credentials: CredentialsDTO): Promise<UserDTO> {
        const { email, password } = credentials;
        const user = (await query(`
            SELECT  userId AS id,
                    username as email,
                    password,
                    firstName,
                    lastName,
                    roleId
            FROM    users  
            WHERE   username = ?
            AND     password = ?
        `,[ email, hashPassword(password, config.get<string>('app.secret'))]))[0];
        return user;
    }

    public async signup(user: UserDTO): Promise<UserDTO> {
        const { firstName, lastName, email, password } = user;
        const result: OkPacketParams = await query(`
            INSERT INTO users(firstName, lastName, username, password, roleId) 
            VALUES(?,?,?,?,?) 
        `, [firstName, lastName, email, hashPassword(password, config.get<string>('app.secret')), Roles.USER]);
        return this.getOne(result.insertId);
    }
}

const user = new User();
export default user;