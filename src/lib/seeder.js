import MongooseConnection from "../config/db.config.js";

class Seeder {
    static async run() {
        new MongooseConnection();

        const seeder = {
            'admin': [
                {
                    email: "janedoe@gmail.com",
                    password: "pass",
                    username: "janedoe",
                    role: "admin"
                }
            ]
        }
    }
    static async registerSeeder() {
        return [new User(), new Role()];
    }
}

export default Seeder