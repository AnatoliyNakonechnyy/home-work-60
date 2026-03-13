import userRouter from './users.js';
import transactionsRouter from './transactions.js';
import rootRouter from './root.js';
import express from 'express';

const router = express.Router();

router.use('/', rootRouter);
router.use('/users', userRouter);
router.use('/transactions', transactionsRouter);

export default router;
