/**
 * @module routs/users
 * Router for /users endpoints.
 *
 * Responsibilities:
 * - Expose CRUD endpoints for users:
 *   - GET    /users
 *   - POST   /users
 *   - GET    /users/:userId
 *   - PUT    /users/:userId
 *   - DELETE /users/:userId
 *
 * Usage:
 * import express from 'express';
 * import userRouter from './routs/users.js';
 * app.use('/users', userRouter);
 *
 * @requires express
 * @requires ../controllers/users.js
 */
// ...existing code...

import express from 'express';
import {
  deleteUsersByIdHandler,
  getUsersByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUsersByIdHandler,
} from '../controllers/users.js';

const userRouter = express.Router();

userRouter.route('/').get(getUsersHandler).post(postUsersHandler);
userRouter
  .route('/:userId')
  .get(getUsersByIdHandler)
  .delete(deleteUsersByIdHandler)
  .put(putUsersByIdHandler);

export default userRouter;
