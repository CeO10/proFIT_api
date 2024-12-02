import Joi from "joi";

export const sessionRequest = joi.object(
    {
        username: joi.string().required(),
        sessionId: joi.string().required(),
        type: joi.string().valid('exercise', 'nutrition', 'stress mgt', 'health checks').required(),
    }
)