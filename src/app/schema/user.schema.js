import { Schema, model } from "mongoose";
import argon from 'argon2';
import { Goal } from "./goal.schema.js";

const UserSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["user", "trainer", "admin"],
            default: "user"
        },
        profile: {
            type: Schema.Types.ObjectId,
            ref: "Profile",
        },
    },
    { timestamps: true}
);

UserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await argon.hash(this.password);
    }
    next();
});

export const User = model("User", UserSchema)