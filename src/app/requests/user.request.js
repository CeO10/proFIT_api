import joi from 'joi';

export const createUserRequest = joi.object( { 
    firstName: joi.string().required(),
    lastName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    gender: joi.string(),
    role: joi.string().valid('user', 'trainer', 'admin').required(),
})