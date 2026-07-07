import { Router } from 'express';
import { apiKey } from '../middlewares/apiKey.js';
import * as AlumnoController from '../controllers/alumno.controller.js';

const router = Router();

router.get('/', AlumnoController.getAll);
router.get('/:id', AlumnoController.getById);
router.post('/', apiKey, AlumnoController.create);
router.patch('/:id', apiKey, AlumnoController.update);
router.delete('/:id', apiKey, AlumnoController.remove);

export default router;
