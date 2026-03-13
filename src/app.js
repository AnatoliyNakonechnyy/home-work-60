/**
 * @module app
 * Express application entry point.
 *
 * Responsibilities:
 * - Load environment variables
 * - Configure middleware (JSON body parser, request logger)
 * - Mount application routes
 * - Start the HTTP server on PORT
 *
 * Environment variables:
 * - PORT: port number to listen on
 *
 * Usage:
 *   node ./src/app.js
 *
 * Notes:
 * - Keep route handlers and middleware in separate modules for testability.
 * - This module starts the server; for testing export the `app` instance if needed.
 */
import express from 'express';
import dotenv from 'dotenv';
import router from './routs/index.js';
import bodyParser from 'body-parser';
import { logger } from './middleware/logger.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(logger);
app.use(router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
