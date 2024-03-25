"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("./crypto");
const uuid_1 = require("uuid");
describe('crypto functions', () => {
    describe('hashPassword function tests', () => {
        test('generates a valid md5', () => {
            const result = (0, crypto_1.hashPassword)((0, uuid_1.v4)(), (0, uuid_1.v4)());
            expect(result).toBeDefined();
            expect(result.length).toBe(32);
            expect(result).toMatch(/^[a-f0-9]{32}$/gi);
        });
        test('generates the same hash for the same plain text password and salt', () => {
            const password = (0, uuid_1.v4)();
            const salt = (0, uuid_1.v4)();
            const hash1 = (0, crypto_1.hashPassword)(password, salt);
            const hash2 = (0, crypto_1.hashPassword)(password, salt);
            expect(hash1).toEqual(hash2);
        });
        test('generates a different hash for different passwords', () => {
            const salt = (0, uuid_1.v4)();
            const password1 = (0, uuid_1.v4)();
            const password2 = (0, uuid_1.v4)();
            const hash1 = (0, crypto_1.hashPassword)(password1, salt);
            const hash2 = (0, crypto_1.hashPassword)(password2, salt);
            expect(hash1).not.toEqual(hash2);
        });
    });
    describe('generateJWT function tests', () => {
    });
});
