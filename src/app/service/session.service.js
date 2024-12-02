import { Session } from "../schema/session.schema.js";

class SessionService {
    constructor(register, price) {
        super (register, price);
        this.register = register;
        this.price = price;
    };

    purchase(numberofsessions) {
        const duration = numberofsessions * this.price;
        return totalCost
    }
};

export default SessionService