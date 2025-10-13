import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';

const router = express.Router();

router.post('/', registerUser);      // POST /api/users
router.post('/auth', loginUser);     // POST /api/users/auth

export default router;