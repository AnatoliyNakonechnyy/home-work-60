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
