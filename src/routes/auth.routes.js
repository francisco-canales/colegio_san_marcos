import { Router } from 'express';
import * as AuthController from '../controllers/auth.controller.js';
import { requireAuth } from '../middlewares/auth.js';
import { requireRole } from '../middlewares/requireRole.js';

const router = Router();

router.post('/registro', AuthController.registrar);
router.post('/registrar', AuthController.registrar);
router.post('/login', AuthController.login);
router.patch('/usuarios/:id/password', requireAuth, AuthController.cambiarPassword);
router.put('/cambiar-password/:id', requireAuth, AuthController.cambiarPassword);
router.get('/perfil', requireAuth, AuthController.perfil);
router.get('/usuarios', requireAuth, requireRole('ADMIN'), AuthController.listarUsuarios);

export default router;
