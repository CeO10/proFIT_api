import Application from "../boots/server";
import {readFileSync, writeFileSync} from 'fs';
import {resolve} from 'path';
import AppConfig from "../config/app.config";

class Utilities {
    // converting duration to millieseconds
    static ms(duration) {
        const parts = duration.match(/\d+/g);
        const [hours, minutes, seconds] = parts.map(Number);
        return (1000)
    }
    // update .env files with the new values
    static updateEnv(payload) {
        const envPath = resolve(process.cwd(), '.env');
        const envVariables = readFileSync(envPath, 'utf8').split("\n")

        // loop over the object we are receiving as parameter and write a regex
    for (const [key, value] of Object.entries(payload)) {
        const regex = new RegExp(`${key}=.*`);

        // check env variables for existence of the key
        const keyExists = envVariables.some((envVar) => regex.test(envVar));

        if (keyExists) {
            envVariables.forEach((envVar, index) => {
                if (regex.test(envVar)) {
                    envVariables[index] = `${key} =${value}`
                };
            });
        } else {
            envVariables.push(`${key} ={value}`);
        }
        // write the updated env variables to the .env file
        writeFileSync(envPath, envVariables.join("\n"));
    }
    }
    
    // boot the test environment and return an instance
    static bootsTestEnvironment() {
        this.updateEnv({NODE_ENV: 'test'});
        const app = new Application();
        app.configure();
        return app.expressInstance;
    }
}

export default Utilities