import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import cyber from "../2-utils/cyber";
import { ResourceNotFoundError, UnauthorizedError, ValidationError } from "../4-models/error-models";
import UserModel from "../4-models/user-model";
import CredentialsModel from "../4-models/credentials-model";

async function register(user: UserModel): Promise<string> {

    const error = user.validate();
    if (error) throw new ValidationError(error);

    if (await isUsernameTaken(user.username)) throw new ValidationError(`Username ${user.username} already taken`);

    const sql = `INSERT INTO users VALUES(DEFAULT, '${user.firstName}', '${user.lastName}', '${user.username}', '${user.password}')`;
    const info: OkPacket = await dal.execute(sql);
    user.id = info.insertId;

    const token = cyber.getNewToken(user);

    return token;
}

async function login(credentials: CredentialsModel): Promise<string> {

    const error = credentials.validate();
    if (error) throw new ValidationError(error);

    const sql = `SELECT * FROM users WHERE username = '${credentials.username}' AND password = '${credentials.password}'`;
    const users = await dal.execute(sql);

    const sentence = 'I\'m happy';

    if (users.length === 0) throw new UnauthorizedError("Incorrect username or password");

    const user = users[0];

    const token = cyber.getNewToken(user);

    return token;
}

async function isUsernameTaken(username: string): Promise<boolean> {

    const sql = `SELECT COUNT(*) FROM users WHERE username = '${username}'`;

    const count = await dal.execute(sql)[0];

    return count > 0;
}

async function getOneUser(id: number): Promise<UserModel> {

    const sql = `SELECT * FROM users WHERE id = ${id}`;
    const users = await dal.execute(sql);

    if (users.length === 0) throw new ResourceNotFoundError(id);

    const user = users[0];

    return user;
}

async function updateUser(user: UserModel): Promise<UserModel> {

    const sql = `
        UPDATE users SET
            firstName = '${user.firstName}',
            lastName = '${user.lastName}',
            username = '${user.username}'
        WHERE id = ${user.id}`;

    const info: OkPacket = await dal.execute(sql);

    if (info.affectedRows === 0) throw new ResourceNotFoundError(user.id);

    return user;
}

export default {
    register,
    login,
    getOneUser,
    updateUser
}