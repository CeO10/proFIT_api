import AppConfig from "../../config/app.config.js";
import redis from 'redis';


class RedisProvider {
    constructor() {
        const client = redis.createClient();
        client.on('connect', () => {
            AppConfig.getOrThrow("node_env") !== 'test' &&
            console.log("Connected to redis")
        });

        client.on('error', (err) => {
            console.log("Redis error", error);
        });

        client.connect();
        this.client = client;
    }

    // set a value in the redis cache with a key and optional expiration
    // @param {number} [expiration = 3600] The number of seconds to keep the cached value
    // before it expires

    async set(key, value, expiration = 3600) {
        return this.setAsync(key, json.stringify(value), "EX", expiration).catch(
            (error) => {
                console.error("Error setting up cache", error);
            }
        )
    }
    // retrieves a value from the redis cache by key

    async get(key) {
        return this.getAsync(key)
        .then((result) => (result ? json.parse(result): null))
        .catch((error) => {
            console.error(`Error fetching cache for key ${key}:`, error);
            return null
        });
    }

    quit() {
        this.client.quit();
    }
}

export default RedisProvider