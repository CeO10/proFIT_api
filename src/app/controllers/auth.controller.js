import { ValidationError } from "../../lib/errors.js";
import Utilities from "../../lib/utils.js";
import AuthService from "../service/auth.service.js";
import {BaseController} from "./base.controller.js"

export const createUserAccount = asyncHandler(async (req, res) => {
    return res.status.json
    ({ success: true, message: "User created" })
});

export const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    const {errors} = validate(registerRequest, req.body);
    if (errors) throw new ValidationError("The request failed", errors)

        const User = await AuthService.registerUser({username, email, password})
        return res.status.json({
            success: true, message: "User registered successfully"
        })
});

export const authenticateUser = aasyncHandler(async (req, res) => {
    const {value, errors} = validate(authenticateUser, req.body)
    if (errors) throw new ValidationError("The request failed", errors);

    await AuthService.authenticateUser(value);
    return res.status.json({
        success: true, message: "User logged in successfully"
    })
});