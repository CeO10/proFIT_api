import { User } from "../schema/user.schema.js";
import { Profile } from "../schema/profile.schema.js";
import { ConflictError } from "../../lib/errors.js";

class UserService {
    static async getAllUsers() {
        return await User.find().exec();
    }

    static async getUserById(username) {
        return await User.findById(username).exec();
    }

    static async getUserByEmail(email) {
        return await User.findOne ({email,}).exec();
    }

    static async createUser(payload) {
        const user = await this.getUserByEmail(payload.email)
        if (user) throw new ConflictError ("This email is taken")
        
            const newUser = await User.create ({
                email: payload.email,
                password: payload.password,
                role: payload.role,
            });

            const profile = await Profile.create ({
                firstName: payload.firstName,
                lastName: payload.lastName,
                phoneNumber: payload.phoneNumber,
                gender: payload.gender,
            });

            return newUser
   }

   static async updateUser(id, payload) {
    const user = await User.findByIdAndUpdate(id, payload, {new: true});

    return user
   }

   static async deleteUser(id) {
    await User.findByIdAndDelete(id);
   }
};

export default UserService