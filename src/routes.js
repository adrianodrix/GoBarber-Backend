import { Router } from 'express';

const routes = new Router();
const user = [];
routes.get('/', (req, res) => {
  user.push('Adriano');

  return res.json({ message: 'Hello Adriano' });
});

export default routes;
