import jwt from 'jsonwebtoken';
import AppConfig from '../../config/app.config.js';
import { verify } from 'argon2';

class JwtProvider {
   static generateAuthenticationToken = (payload) => {
        return sign(payload, AppConfig.jwt.secret, AppConfig.jwt.expires_in)
    };

    static validateAuthenticationToken = (token) => {
        return verify(token, AppConfig.jwt.secret)
    }
}

export default JwtProvider