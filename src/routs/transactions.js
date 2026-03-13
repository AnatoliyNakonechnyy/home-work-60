/**
 * @module routs/transactions
 * Router for /transactions endpoints.
 *
 * Responsibilities:
 * - Expose CRUD endpoints for transactions:
 *   - GET    /transactions
 *   - POST   /transactions
 *   - GET    /transactions/:transactionId
 *   - PUT    /transactions/:transactionId
 *   - DELETE /transactions/:transactionId
 *
 * Usage:
 * import express from 'express';
 * import transactionsRouter from './routs/transactions.js';
 * app.use('/transactions', transactionsRouter);
 *
 * @requires express
 * @requires ../controllers/transactions.js
 */
// ...existing code...
import express from 'express';
import {
  deleteTransactionsByIdHandler,
  getTransactionsByIdHandler,
  getTransactionsHandler,
  postTransactionsHandler,
  putTransactionsByIdHandler,
} from '../controllers/transactions.js';

const transactionsRouter = express.Router();
transactionsRouter
  .route('/')
  .get(getTransactionsHandler)
  .post(postTransactionsHandler);
transactionsRouter
  .route('/:transactionId')
  .delete(deleteTransactionsByIdHandler)
  .get(getTransactionsByIdHandler)
  .put(putTransactionsByIdHandler);

export default transactionsRouter;
