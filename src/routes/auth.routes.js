import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/auth.js';
import { requireRole } from '../middlewares/requireRole.js';

const router = Router();

router.post('/registrar', AuthController.registrar);
router.post('/login', AuthController.login);
router.put('/cambiar-password/:id', requireAuth, AuthController.cambiarPassword);
router.get('/perfil', requireAuth, AuthController.perfil);
router.get('/usuarios', requireAuth, requireRole('ADMIN'), AuthController.listarUsuarios);

export default router;
