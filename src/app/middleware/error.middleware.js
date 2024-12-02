import { BadRequestError, ConflictError, NotFoundError, UnauthenticatedError, UnauthorizedError, ValidationError } from "../../lib/errors.js";

const errorMiddleware = function (err,req,res, next) {
    if (
        err instanceof NotFoundError ||
        err instanceof BadRequestError || 
        err instanceof UnauthorizedError ||
        err instanceof UnauthenticatedError ||
        err instanceof ConflictError ||
        err instanceof InternalServerError
    ) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
        });
    }

    if (err instanceof ValidationError)
    {
        return res.status(err.statusCode).json({
            success: false,
            message: err,message,
            errors: err.errors,
        });
    }
    return res.status(500).json({
        success: false,
        message: err.message,
    });
};

export default errorMiddleware