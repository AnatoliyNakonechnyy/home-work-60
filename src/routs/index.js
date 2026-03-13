/**
 * @module routs/index
 * Central router that mounts application sub-routers.
 *
 * Responsibilities:
 * - Mount rootRouter at '/'
 * - Mount userRouter at '/users'
 * - Mount transactionsRouter at '/transactions'
 *
 * Usage:
 * import express from 'express';
 * import router from './routs/index.js';
 * app.use(router);
 *
 * @requires express
 * @requires ./users.js
 * @requires ./transactions.js
 * @requires ./root.js
 */

import userRouter from './users.js';
import transactionsRouter from './transactions.js';
import rootRouter from './root.js';
import express from 'express';

const router = express.Router();

router.use('/', rootRouter);
router.use('/users', userRouter);
router.use('/transactions', transactionsRouter);

export default router;
