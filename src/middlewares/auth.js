import { AppError } from '../errors/appError.js';
import { verificarToken } from '../utils/token.js';

export const requireAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Token no proporcionado', 401));
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = verificarToken(token);

    req.usuario = payload;
    next();
  } catch (error) {
    next(new AppError('Token inválido o expirado', 401));
  }
};
