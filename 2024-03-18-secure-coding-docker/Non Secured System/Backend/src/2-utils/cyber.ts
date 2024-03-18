import { Request } from "express";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import UserModel from "../4-models/user-model";

const jwtSecretKey = "JohnBryceFullStackCourse";

function getNewToken(user: UserModel): string {
    delete user.password;
    const container = { user };
    const options = { expiresIn: "3h" };
    const token = jwt.sign(container, jwtSecretKey, options);
    return token;
}

function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {
            const header = request.header("authorization");
            if (!header) {
                resolve(false);
                return;
            }
            const token = header.substring(7);
            if (!token) {
                resolve(false);
                return;
            }
            jwt.verify(token, jwtSecretKey, (err: JsonWebTokenError) => {
                if (err) {
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        }
        catch (err: any) {
            reject(err);
        }
    });
}

export default {
    getNewToken,
    verifyToken
};
