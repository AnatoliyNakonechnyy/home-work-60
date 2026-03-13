/**
 * @module controllers/users
 * Handlers for /users routes.
 *
 * Exported handlers:
 * - getUsersHandler(req, res)              => GET  /users
 * - getUsersByIdHandler(req, res)          => GET  /users/:userId
 * - postUsersHandler(req, res)             => POST /users
 * - deleteUsersByIdHandler(req, res)       => DELETE /users/:userId
 * - putUsersByIdHandler(req, res)          => PUT /users/:userId
 *
 * Usage:
 * import express from 'express';
 * import {
 *   getUsersHandler,
 *   getUsersByIdHandler,
 *   postUsersHandler,
 *   deleteUsersByIdHandler,
 *   putUsersByIdHandler
 * } from './controllers/users.js';
 *
 * const router = express.Router();
 * router.get('/users', getUsersHandler);
 * router.get('/users/:userId', getUsersByIdHandler);
 * router.post('/users', postUsersHandler);
 * router.delete('/users/:userId', deleteUsersByIdHandler);
 * router.put('/users/:userId', putUsersByIdHandler);
 *
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export const getUsersHandler = (req, res) => {
  res.end('Users endpoint');
};
export const getUsersByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.end(`User with ID: ${userId}`);
};
export const postUsersHandler = (req, res) => {
  const body = req.body;
  res.end(`Create user endpoint with data: ${JSON.stringify(body)}`);
};
export const deleteUsersByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.end(`Delete user with ID: ${userId}`);
};
export const putUsersByIdHandler = (req, res) => {
  const { userId } = req.params;
  res.end(`Update user with ID: ${userId}`);
};
