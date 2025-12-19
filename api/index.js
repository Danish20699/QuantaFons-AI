// Vercel serverless function handler
import express from 'express';
import { registerRoutes } from '../server/routes';
import { createServer } from 'http';

const app = express();
const httpServer = createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
let routesRegistered = false;

async function setupRoutes() {
    if (!routesRegistered) {
        await registerRoutes(httpServer, app);
        routesRegistered = true;
    }
}

// Export the Express app as a Vercel serverless function
export default async function handler(req, res) {
    await setupRoutes();
    return app(req, res);
}
