import { Schema, model } from "mongoose";

const SessionSchema = new Schema (
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            enum: ["exercise", "nutrition", "stress mgt", "health check"],
            required: true,
        },
    }
);

export const Session = model("Session", SessionSchema)