import mongoose, { Schema, Document, Model } from "mongoose";
import User from "../../../domain/models/user";

const userSchema = new Schema<User & Document>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export const UserModel: Model<User & Document> = mongoose.model<User & Document>("User", userSchema);