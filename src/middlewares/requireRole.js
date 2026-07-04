import { AppError } from '../errors/appError.js';

export const requireRole = (...roles) => (req, res, next) => {
  if (!req.usuario) {
    return next(new AppError('No autorizado', 401));
  }

  if (!roles.includes(req.usuario.rol)) {
    return next(new AppError('No tienes permisos para esta acción', 403));
  }

  next();
};
