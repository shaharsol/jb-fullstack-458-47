"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = exports.hashPassword = void 0;
const crypto_1 = require("crypto");
const jsonwebtoken_1 = require("jsonwebtoken");
// user enters '123456' as password
// we salt it with another string 'sdghfgsdhfs'
// we want to save in the database something like 'dfjsdhfsdjhfjksdhfkjsdhfk'
function hashPassword(plainTextPassword, salt) {
    // return createHash('md5')
    //         .update(`${plainTextPassword}${salt}`) // <= salting the password
    //         .digest('hex'); // export has hexa
    return (0, crypto_1.createHmac)('md5', salt)
        .update(`${plainTextPassword}`) // <= salting the password
        .digest('hex'); // export has hexa
}
exports.hashPassword = hashPassword;
function generateJWT(user, secret, expiresIn) {
    return (0, jsonwebtoken_1.sign)({ user }, secret, { expiresIn });
}
exports.generateJWT = generateJWT;
