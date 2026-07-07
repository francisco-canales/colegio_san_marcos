import { AppError } from '../errors/appError.js';
import { Prisma } from '@prisma/client';

export const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${req.method} ${req.url} →`, err.message);

  // Errores de negocio (AppError)
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  // Errores de Prisma
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return res.status(409).json({ error: 'El valor ya existe y debe ser único' });
    }
    if (err.code === 'P2025') {
      return res.status(404).json({ error: 'Registro no encontrado' });
    }
  }

  // Error genérico (no exponer detalles internos)
  res.status(500).json({ error: 'Error interno del servidor' });
};
