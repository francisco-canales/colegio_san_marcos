import { prisma } from '../config/prisma.js';

export const findAll = ({ grado } = {}) => {
  return prisma.alumno.findMany({
    where: grado ? { grado } : undefined,
  });
};

export const findById = (id) => {
  return prisma.alumno.findUnique({
    where: { id },
  });
};

export const findByNombreCompleto = (nombre, apellido) => {
  return prisma.alumno.findFirst({
    where: { nombre, apellido },
  });
};

export const save = ({ nombre, apellido, grado, seccion }) => {
  return prisma.alumno.create({
    data: { nombre, apellido, grado, seccion },
  });
};

export const updateById = (id, data) => {
  return prisma.alumno.update({
    where: { id },
    data,
  });
};

export const deleteById = (id) => {
  return prisma.alumno.delete({
    where: { id },
  });
};
