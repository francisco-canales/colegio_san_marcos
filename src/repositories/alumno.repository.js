let alumnos = [
  { id: 1, nombre: 'María', apellido: 'González', grado: '5to', seccion: 'A' },
  { id: 2, nombre: 'Carlos', apellido: 'Ramos', grado: '5to', seccion: 'B' },
  { id: 3, nombre: 'Andrea', apellido: 'López', grado: '6to', seccion: 'A' },
];

let idActual = 4;

export const findAll = ({ grado } = {}) => {
  if (grado) return alumnos.filter((a) => a.grado === grado);

  return alumnos;
};

export const findById = (id) => {
  return alumnos.find((a) => a.id === Number(id)) ?? null;
};

export const findByNombreCompleto = (nombre, apellido) => {
  return (
    alumnos.find((a) => a.nombre === nombre && a.apellido === apellido) ?? null
  );
};

export const save = ({ nombre, apellido, grado, seccion }) => {
  const nuevoAlumno = {
    id: idActual++,
    nombre,
    apellido,
    grado,
    seccion,
  };

  alumnos.push(nuevoAlumno);

  return nuevoAlumno;
};

export const updateById = (id, campos) => {
  const alumno = alumnos.find((a) => a.id === Number(id));

  if (!alumno) return null;

  const permitidos = ['nombre', 'apellido', 'grado', 'seccion'];

  permitidos.forEach((campo) => {
    if (campos[campo] !== undefined) alumno[campo] = campos[campo];
  });

  return alumno;
};

export const deleteById = (id) => {
  const alumnoIndex = alumnos.findIndex((a) => a.id === Number(id));

  if (alumnoIndex === -1) return false;

  alumnos.splice(alumnoIndex, 1);

  return true;
};
