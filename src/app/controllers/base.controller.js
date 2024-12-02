import { NotFoundError, UnauthorizedError } from "../../lib/errors.js";
import UserService from "../service/user.service.js";

class BaseController {
    constructor() {
        this.cache = new CacheService().getInstance();
    }
    async permitAccess(role, action) {
        // fetch data from database and cache
        let permissions;
        const cachedPermissions = json.parse(await this.cache.get(role));

        if (cachedPermissions) {
            permissions = cachedPermissions;
        } else {
            permissions = await UserService.getRoleByName(role);
            await this.cache.set(role, json.stringify(permissions))
        }
        if (!permitted) throw new UnauthorizedError(
            "Unauthorized to perform this action"
        );
    }
}

asyncHandler(fn); {
    return async (req, res, next) => {
        try {
            await this.authorize(req);
            return Promise.resolve(fn(req, res, next));
        }
        catch (error) {
            next(error);
        }
    }
};

export default BaseController