/**
 * @module routs/root
 * Router for application root path.
 *
 * Responsibilities:
 * - Expose GET / that returns application info or health check.
 *
 * Usage:
 * import express from 'express';
 * import rootRouter from './routs/root.js';
 * app.use(rootRouter);
 *
 * @requires express
 * @requires ../controllers/root.js
 */

// ...existing code...
import express from 'express';
import { getRootHandler } from '../controllers/root.js';

const rootRouter = express.Router();

rootRouter.route('/').get(getRootHandler);
export default rootRouter;
