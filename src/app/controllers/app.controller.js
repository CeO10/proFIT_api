import { NotFoundError } from "../../lib/errors.js";
import {asyncHandler} from "./base.controller.js"

class AppController {
    constructor() {
        super();
    }
    start = asyncHandler(async (req, res) => {
         await Response(res)
    });

    serverStatus = this.asyncHandler(async (req, res) => {
        return Response(res, {}, 'Server is running')
    });

    notFoundRoute = this.asyncHandler(async (req, res) => {
        return this.error (NotFoundError, `The requested route is not found`)
    });
}

export default AppController