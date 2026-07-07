import * as AlumnoService from '../services/alumno.service.js';

export const getAll = async (req, res, next) => {
  try {
    const { grado } = req.query;
    const alumnos = await AlumnoService.getAll({ grado });
    res.json(alumnos);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const alumno = await AlumnoService.getById(Number(req.params.id));
    res.json(alumno);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const { nombre, apellido, grado, seccion } = req.body;
    const nuevoAlumno = await AlumnoService.create({
      nombre,
      apellido,
      grado,
      seccion,
    });
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const alumnoActualizado = await AlumnoService.update(
      Number(req.params.id),
      req.body,
    );
    res.json(alumnoActualizado);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    await AlumnoService.remove(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
