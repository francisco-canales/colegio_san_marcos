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
