import 'dotenv/config'
import { initApp } from './app';

const start = async () => {
    if (
        !process.env.API_PORT ||
        !process.env.API_URL ||
        !process.env.DATABASE_PATH ||
        !process.env.DATABASE_LOGGING ||
        !process.env.FRONTEND_URL
    ) {
        throw new Error('Make sure to set all required environment variables');
    }

    const app = await initApp();
    app.listen(process.env.API_PORT, () => {
        console.log(`Server started at ${process.env.API_URL}:${process.env.API_PORT}`);
    });
}

start();