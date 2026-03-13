/**
 * @module controllers/root
 * Handler for application root route.
 *
 * Responsibilities:
 * - Provide a simple health/info endpoint at GET /
 *
 * Exported handlers:
 * - getRootHandler(req, res) => GET /
 *
 * Usage:
 * import express from 'express';
 * import { getRootHandler } from './controllers/root.js';
 * const router = express.Router();
 * router.get('/', getRootHandler);
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getRootHandler = (req, res) => {
  res.end('Hello, World!');
};
