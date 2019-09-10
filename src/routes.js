import { Router } from 'express';
import multer from 'multer';

import MulterConfig from './config/multer';

import AuthMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(MulterConfig);

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello!' });
});

routes.post('/sessions', SessionController.store);
routes.post('/users', UserController.store);

routes.use(AuthMiddleware);
routes.put('/users/me', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);
routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);

routes.get('/schedule', ScheduleController.index);

export default routes;
