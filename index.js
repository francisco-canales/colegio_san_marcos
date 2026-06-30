import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});

// Mi primer ruta
app.get('/', (req, res) => {
  res.json({
    message: 'API del Colegio San Marcos',
  });
});

// Base de datos temporal en memoria
let alumnos = [
  { id: 1, nombre: 'María', apellido: 'González', grado: '5to', seccion: 'A' },
  { id: 2, nombre: 'Carlos', apellido: 'Ramos', grado: '5to', seccion: 'B' },
  { id: 3, nombre: 'Andrea', apellido: 'López', grado: '6to', seccion: 'A' },
];

// Variable para generar el id autoincremental
let idActual = 4;

// Devuelve un alumno específico por su ID
app.get('/alumnos/:id', (req, res) => {
  const alumno = alumnos.find((a) => a.id === Number(req.params.id));

  if (!alumno) {
    return res.status(404).json({
      error: 'Alumno no encontrado',
    });
  }

  res.json(alumno);
});

// Lista todos los alumnos y acepta ?grado como filtro opcional
app.get('/alumnos', (req, res) => {
  const grado = req.query.grado;

  const resultado = grado ? alumnos.filter((a) => a.grado === grado) : alumnos;

  res.json(resultado);
});


// POST /alumnos

// Registrar un nuevo alumno
app.post('/alumnos', (req, res) => {
  if (
    req.body === undefined ||
    req.body.nombre === undefined ||
    req.body.apellido === undefined ||
    req.body.grado === undefined ||
    req.body.seccion === undefined
  ) {
    return res.status(400).json({
      error:
        'Todos los campos son requeridos: nombre, apellido, grado, seccion',
    });
  }

  const { nombre, apellido, grado, seccion } = req.body;

  const nuevoAlumno = {
    id: idActual++,
    nombre,
    apellido,
    grado,
    seccion,
  };

  alumnos.push(nuevoAlumno);

  res.status(201).json({
    message: 'Alumno registrado existosamente',
    alumno: nuevoAlumno,
  });
});

// PATCH /alumnos/:id
// Actualiza solo los campos enviados en el body, los demas se mantienen igual
app.patch('/alumnos/:id', (req, res) => {
  const alumno = alumnos.find((a) => a.id === Number(req.params.id));

  const { nombre, apellido, grado, seccion } = req.body;

  if (nombre) alumno.nombre = nombre;
  if (apellido) alumno.apellido = apellido;
  if (grado) alumno.grado = grado;
  if (seccion) alumno.seccion = seccion;

  res.json({
    message: 'Alumno actualizado exitosamente',
    alumno,
  });
});

//Put /alumnos/:id
app.put('/alumnos/:id', (req, res) => {
  // error: 'El body no puede estar vacío',
  // });
  // }

  const alumno = alumnos.find((a) => a.id === Number(req.params.id));

  if (!alumno) {
    return res.status(404).json({
      error: 'Alumno no encontrado',
    });
  }

  const { nombre, apellido, grado, seccion } = req.body;

  alumno.nombre = nombre;
  alumno.apellido = apellido;
  alumno.grado = grado;
  alumno.seccion = seccion;

  res.json({
    message: 'Alumno actualizado exitosamente',
    alumno,
  });
});


// DELETE /alumnos/:id
// Elimina un alumno por su id
app.delete('/alumnos/:id', (req, res) => {
  const alumnoIndex = alumnos.findIndex((a) => a.id === Number(req.params.id));

  if (alumnoIndex === -1) {
    return res.status(404).json({
      message: 'Alumno no encontrado'
    })
  }

  alumnos.splice(alumnoIndex, 1)

  res.status(204).send();
})

