import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        if (MONGO_URI) {
            const conn = await mongoose.connect(MONGO_URI);
            console.log(`MongoDB connected: ${conn.connection.host}`);
        }
    } catch (err) {
        const error: Error = err as Error;
        console.log(`Error is ${error.message}`);
        process.exit(1);
    }
};