import JwtProvider from "../providers/jwt.provider.js";
import { UnauthenticatedError } from "../../lib/errors.js";

class AuthMiddleware {
    handle(req,res,next) {
        try {
            const token = req.cookies.authentication;
            req.user = JwtProvider.validateAuthenticationToken(token)
            next();

            if (!token) throw new UnauthenticatedError 
            ("Invalid or missing authentication token");

        } catch (error) {throw error}
    }
};

export default AuthMiddleware