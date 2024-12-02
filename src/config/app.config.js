import {config} from 'dotenv';

class AppConfig {
    static get(key) {
        config();
        return process.env[String(key).toUpperCase()];
    }

    static getOrThrow(key) {
        const value = this.get(key);
        if (!value) {throw new Error("Missing environment variable")}
        return value;
    }
    static database() {
        development: process.env.STAGING_MONGODB_URI;
        test: process.env.TEST_MONGODB_URI;
        production: process.env.MONGODB_URI;
    }
}

export default AppConfig