import AppConfig from "./app.config.js";
import mongoose from "mongoose";

class MongooseConnection {
    static connect(environment) {
        let uri
        switch (environment) {
            case "development":
                uri = AppConfig.getOrThrow("mongodb_uri_development");
                break;
            
            case "production":
                uri = AppConfig.getOrThrow("mongodb_uri_production");
                break;

            default:
                uri = "mongodb://localhost:27017/proFIT";
                break;
        }
        mongoose.connect(uri);
        mongoose.connection.on("connected", () => {
            environment !== 'test' && console.log("Connected to database");
        });
        mongoose.connection.on("error", () => {
            console.error("Failed to connect to database");
        });
    }
}

export default MongooseConnection