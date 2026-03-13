/**
 * @module middleware/logger
 * Simple Express middleware that logs incoming requests.
 *
 * Logs: [ISO-timestamp] HTTP_METHOD URL
 *
 * Usage:
 * import express from 'express';
 * import { logger } from './middleware/logger.js';
 * const app = express();
 * app.use(logger);
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 */
export const logger = (req, res, next) => {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
};
