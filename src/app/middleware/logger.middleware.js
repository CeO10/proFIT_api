import AppConfig from "../../config/app.config.js";
import morgan from 'morgan';

const logger = () => morgan (
    AppConfig.environment === 'development'
)

export default logger