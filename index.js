import 'dotenv/config';
import express from 'express';
import alumnosRoutes from './src/routes/alumno.routes.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// Rutas para alumnos
app.use('/api/alumnos', alumnosRoutes);

// Captura cualquier solicitud que no coincida con las rutas definidas
app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});


