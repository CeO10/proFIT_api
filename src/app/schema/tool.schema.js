import { Schema, model } from "mongoose";

const ToolSchema = new Schema (
    {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["active", "maintenance", "retired"],
            required: true,
        },
    }
);

export const Tool = model("Tool", ToolSchema)