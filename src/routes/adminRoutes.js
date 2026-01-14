import express from 'express';
import {
    addStore,
    addUser,
    getDashboardStats,
    getUsers,
    getStoreOwners,
    getAdmins,
    getAvailableOwners,
    getStores,
} from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('ADMIN'));

router.get('/dashboard', getDashboardStats);
router.post('/stores', addStore);
router.get('/stores', getStores);
router.post('/users', addUser);
router.get('/users', getUsers);
router.get('/store-owners', getStoreOwners);
router.get('/admins', getAdmins);
router.get('/available-owners', getAvailableOwners);

export default router;
