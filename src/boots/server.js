import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import { createServer } from 'http';
import AppConfig from '../config/app.config.js';
import errorMiddleware from '../app/middleware/error.middleware.js';


class Application {
    constructor() {
        this.expressInstance = express();
        this.environment = AppConfig.getOrThrow("node_env")
    }

    configure() {
        // middleware
        this.middleware();
        // routes
        this.routes();
        // error handling
        this.error();
        // database
        this.database();
    }

    middleware() {
        this.expressInstance.use(express.json());
        this.expressInstance.use(cors());
        this.expressInstance.use(compression());
        this.expressInstance.use(helmet());
        this.expressInstance.use(express.urlencoded( {extended: true} ))
    }

    routes() {
        this.expressInstance.use("/api/v1", appRouter);
        RouterConfig.cacheRoutes(this.expressInstance);
    }

    error() {
        this.expressInstance.use((err, req, res, next) => {
            errorHandler.handle(error)
        });
    }

    database() {
        MongooseConnection.connect(this.environment);
    }


    start(port) {
        const server = createServer(this.expressInstance);
        server.listen(port, () => {
            console.log("Server is running");
        });
    }
    catch(error) {
        console.error.bind(error);
        process.exit(1)
    }
};

export default Application