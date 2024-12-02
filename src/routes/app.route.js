import express from "express";
import AuthMiddleware from "../app/middleware/auth.middleware.js";
import AppController from "../app/controllers/app.controller.js";


const Router = express.Router();
Router.registerRoutes(routes)

// CRUD Functions
Router.get('/', (req, res) => {
    res.send (users)
});

Router.post ('/', AuthMiddleware, AuthController)

Router.get ('/', AuthMiddleware, AppController)

Router.get ('/health', AuthMiddleware, AppController)

Router.put ('/', AuthMiddleware, AppController)

Router.delete ('/', AuthMiddleware, AuthController)


export const appRouter = router.getRouter();