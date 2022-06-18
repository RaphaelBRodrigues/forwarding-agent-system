import Router from 'express';
import DashboardController from './controllers/dashboard';

const router = Router.Router();

router.get('/', DashboardController.store);

export default router;
