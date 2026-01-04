import { Router } from 'express';
import { adminLogin, adminDashboard } from '../controllers/admin.controller';
import { adminMiddleware } from '../middleware/admin.middleware';

const router = Router();

// Route for admin login
router.post('/login', adminLogin);

// Route for admin dashboard, protected by admin middleware
router.get('/dashboard', adminMiddleware, adminDashboard);

export default router;