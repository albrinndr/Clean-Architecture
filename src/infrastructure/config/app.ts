import express from 'express';
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes';
dotenv.config();

export const createServer = () => {
    try {
        const app = express();
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(userRoutes);

        return app;
    } catch (err) {
        const error: Error = err as Error;
        console.log(error.message);
    }
}

