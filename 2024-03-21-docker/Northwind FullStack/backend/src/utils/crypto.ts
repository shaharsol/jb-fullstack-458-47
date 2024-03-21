import { createHash, createHmac } from 'crypto';
import userDTO from '../models/auth/user-dto';
import { sign } from 'jsonwebtoken';

// user enters '123456' as password
// we salt it with another string 'sdghfgsdhfs'
// we want to save in the database something like 'dfjsdhfsdjhfjksdhfkjsdhfk'
export function hashPassword(plainTextPassword: string, salt: string): string {
    // return createHash('md5')
    //         .update(`${plainTextPassword}${salt}`) // <= salting the password
    //         .digest('hex'); // export has hexa
        return createHmac('md5', salt)
            .update(`${plainTextPassword}`) // <= salting the password
            .digest('hex'); // export has hexa
}

export function generateJWT(user: userDTO, secret: string, expiresIn: string): string {
    return sign({ user }, secret, { expiresIn })
}
