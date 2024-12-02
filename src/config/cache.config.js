import RedisProvider from "../app/providers/redis.provider.js";

class CacheConnect {
    constructor() {
        this.cache = new RedisProvider();
    }

    // returns the RedisProvider instance
    getInstance() {
        return this.cache;
    }

    // closes the redis connection
    quit() {
        this.cache.quit();
    }
}

export default CacheConnect;