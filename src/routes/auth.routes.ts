import express from 'express';
import { AuthController } from '../controllers/auth.controllers';

const router = express.Router();

const authController = new AuthController();

router.route('/register').post((req, res) => authController.register(req, res));

export default router;
