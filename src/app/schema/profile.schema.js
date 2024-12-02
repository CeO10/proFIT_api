import { Schema, model } from "mongoose";

const ProfileSchema = new Schema (
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            enum: ["male", "female"],
            required: true,
        },
    }
);

export const Profile = model("Profile", ProfileSchema)