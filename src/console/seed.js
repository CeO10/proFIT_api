import Seeder from "../lib/seeder.js";
import MongooseConnection from "../config/db.config.js";


// Replace with mongodb connection string,
const uri = "mongodb://localhost:27017/proFIT"

async function seedDatabase() {
    try {
        await Seeder.connect();

        // sample data to insert 
        const seedData = [
            {name: 'janedoe', gender: 'female'},
            {name: 'johndoe', gender: 'male'}
        ]
        console.info("Seeding completed")
        process.exit(0)
    }
    catch(error) {
        console.errror("Error seeding database", error);
        process.exit(1);
    }
}