import Model from "./model";
import CredentialsDTO from './credentials-dto';
import UserDTO, { Roles } from './user-dto';
import { OkPacketParams } from "mysql2";
import query from "../../db/mysql";
import { createHash } from 'crypto';
import config from "config";

class User implements Model {

    // user enters '123456' as password
    // we salt it with another string 'sdghfgsdhfs'
    // we want to save in the database something like 'dfjsdhfsdjhfjksdhfkjsdhfk'
    private hashPassword(plainTextPassword: string): string {
        return createHash('md5')
                .update(`${plainTextPassword}${config.get<string>('app.secret')}`) // <= salting the password
                .digest('hex'); // export has hexa
    }

    public async login(credentials: CredentialsDTO): Promise<UserDTO> {

    }
    public async signup(user: UserDTO): Promise<UserDTO> {
        const { firstName, lastName, username, password } = user;
        const result: OkPacketParams = await query(`
            INSERT INTO users(firstName, lastName, username, password, roleId) 
            VALUES(?,?,?,?,?) 
        `, [firstName, lastName, username, this.hashPassword(password), Roles.USER]);
        return this.getOne(result.insertId);
    }
}

const user = new User();
export default user;