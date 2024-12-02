import { Schema, models } from "mongoose";
import { User } from "./user.schema.js";

const GoalSchema = new Schema(
    {
        user: {
            type: String,
            target: Number,
            progress: Number,
            achieved: Boolean,
        }
    }
)

export const Goal = model("Goal", GoalSchema)