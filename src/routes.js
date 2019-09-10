import { Router } from 'express';

import AuthMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello!' });
});

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(AuthMiddleware);
routes.put('/users/me', UserController.update);

export default routes;
