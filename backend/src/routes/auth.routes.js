import express from 'express';
import * as authController from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/login', authController.login);
router.delete('/logout/:token', authController.logout);

export default router;