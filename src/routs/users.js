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
