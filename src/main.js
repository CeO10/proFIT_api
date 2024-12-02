import Application from "./boots/server.js";
import AppConfig from "./config/app.config.js";

// starts the server

const boots = async () => {
    const app = new Application();
    app.configure();
    app.start(AppConfig.getOrThrow('port'));
};

boots();


// (() => 
// {
//     try {
//         server.listen(AppConfig)
//     }
//     catch (errror){
//         console.error("Server could not be started", errors)
//         process.exit(1)
//     }
// })();