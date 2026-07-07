import { Router } from 'express';
import { apiKey } from '../middlewares/apiKey.js';
import { requireAuth } from '../middlewares/auth.js';
import { requireRole } from '../middlewares/requireRole.js';
import * as AlumnoController from '../controllers/alumno.controller.js';

const router = Router();

router.get('/', AlumnoController.getAll);
router.get('/:id', AlumnoController.getById);
// Create and update: application must present API key and user must be authenticated
// with role ADMIN or COORDINADOR.
router.post('/', apiKey, requireAuth, requireRole('ADMIN', 'COORDINADOR'), AlumnoController.create);
router.patch('/:id', apiKey, requireAuth, requireRole('ADMIN', 'COORDINADOR'), AlumnoController.update);
// Delete: application must present API key and user must be authenticated with role ADMIN.
router.delete('/:id', apiKey, requireAuth, requireRole('ADMIN'), AlumnoController.remove);

export default router;
