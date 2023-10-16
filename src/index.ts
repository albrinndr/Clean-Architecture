import { createServer } from './infrastructure/config/app';
import { connectDB } from './infrastructure/config/db';

const app = createServer();
const port = process.env.PORT || 5000

connectDB().then(() => {
    app?.listen(port, () => console.log("Server started!"));
});