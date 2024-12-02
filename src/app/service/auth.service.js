import { NotFoundError} from "../../lib/errors";
import UserService from "./user.service";
import argon from 'argon2';
import JwtProvider from "../providers/jwt.provider";


class AuthService 
{
    static async authenticate(payload) {
        await UserService.getUserByEmail(payload.email)

        if (!user) throw new NotFoundError 
        ("User not found");

        if (user) await argon.verify (user.get('password').toString(), payload.password)

            return JwtProvider.generateAuthenticationToken()
    }

    static async createUserAccount(payload) {
        return await UserService.createUser(payload);
    }
};

export default AuthService