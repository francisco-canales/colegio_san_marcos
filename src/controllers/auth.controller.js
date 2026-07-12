import * as AuthService from '../services/auth.service.js';

export const registrar = async (req, res, next) => {
  try {
    const usuario = await AuthService.registrar({
      nombre: req.body?.nombre,
      email: req.body?.email,
      password: req.body?.password,
    });

    res.status(201).json(usuario);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const respuesta = await AuthService.iniciarSesion({
      email: req.body?.email,
      password: req.body?.password,
    });

    res.json(respuesta);
  } catch (error) {
    next(error);
  }
};

export const cambiarPassword = async (req, res, next) => {
  try {
    await AuthService.cambiarPassword(
      Number(req.params.id),
      {
        passwordActual: req.body?.passwordActual,
        passwordNueva: req.body?.passwordNueva,
      },
      req.usuario?.id,
    );

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

export const perfil = async (req, res, next) => {
  try {
    const usuario = await AuthService.obtenerPerfil(req.usuario.id);
    res.json(usuario);
  } catch (error) {
    next(error);
  }
};

export const listarUsuarios = async (req, res, next) => {
  try {
    const usuarios = await AuthService.listarUsuarios();
    res.json(usuarios);
  } catch (error) {
    next(error);
  }
};
