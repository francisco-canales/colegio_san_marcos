import { AppError } from '../errors/appError.js';

export const requireRole = (...rolesPermitidos) => (req, res, next) => {
  if (!req.usuario) {
    return next(new AppError('No autorizado', 401));
  }

  if (!rolesPermitidos.includes(req.usuario.rol)) {
    return next(new AppError('No tienes permiso para realizar esta acción', 403));
  }

  next();
};
