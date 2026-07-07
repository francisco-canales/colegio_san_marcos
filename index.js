import 'dotenv/config';
import express from 'express';
import alumnosRoutes from './src/routes/alumno.routes.js';
import authRoutes from './src/routes/auth.routes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './src/config/swagger.js';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.use('/api/alumnos', alumnosRoutes);
app.use('/api/auth', authRoutes);

// Swagger UI
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((req, res) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});


