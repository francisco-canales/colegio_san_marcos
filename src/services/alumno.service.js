import { AppError } from '../errors/appError.js';
import * as AlumnoRepository from '../repositories/alumno.repository.js';

export const getAll = async ({ grado } = {}) => {
  return await AlumnoRepository.findAll({ grado });
};

export const getById = async (id) => {
  const alumno = await AlumnoRepository.findById(id);

  if (!alumno) {
    throw new AppError('Alumno no encontrado', 404);
  }

  return alumno;
};

export const create = async ({ nombre, apellido, grado, seccion }) => {
  if (!nombre || !apellido || !grado || !seccion) {
    throw new AppError(
      'Todos los campos son requeridos: nombre, apellido, grado, seccion',
      400,
    );
  }

  const existente = await AlumnoRepository.findByNombreCompleto(
    nombre,
    apellido,
  );

  if (existente) {
    throw new AppError(
      `Ya existe un alumno registrado con el nombre ${nombre} ${apellido}`,
      409,
    );
  }

  return await AlumnoRepository.save({ nombre, apellido, grado, seccion });
};

export const update = async (id, campos) => {
  const existe = await AlumnoRepository.findById(id);

  if (!existe) {
    throw new AppError('Alumno no encontrado', 404);
  }

  const camposPermitidos = ['nombre', 'apellido', 'grado', 'seccion'];

  const camposFiltrados = {};

  camposPermitidos.forEach((campo) => {
    if (campos[campo] !== undefined) {
      camposFiltrados[campo] = campos[campo];
    }
  });

  if (Object.keys(camposFiltrados).length === 0) {
    throw new AppError(
      'Debes enviar al menos un campo válido: nombre, apellido, grado, seccion',
      400,
    );
  }

  return await AlumnoRepository.updateById(id, camposFiltrados);
};

export const remove = async (id) => {
  const existe = await AlumnoRepository.findById(id);

  if (!existe) {
    throw new AppError('Alumno no encontrado', 404);
  }

  await AlumnoRepository.deleteById(id);
};
