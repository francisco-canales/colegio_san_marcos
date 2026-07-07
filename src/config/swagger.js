import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Colegio San Marcos',
      version: '1.0.0',
      description: 'Documentación de la API del sistema de gestión académica del Colegio San Marcos',
    },
    servers: [
      { url: 'http://localhost:3000', description: 'Servidor de desarrollo' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        apiKeyAuth: { type: 'apiKey', in: 'header', name: 'x-api-key' },
      },
      schemas: {
        Alumno: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'María' },
            apellido: { type: 'string', example: 'González' },
            grado: { type: 'string', example: '5to' },
            seccion: { type: 'string', example: 'A' },
          },
        },
        NuevoAlumno: {
          type: 'object',
          required: ['nombre', 'apellido', 'grado', 'seccion'],
          properties: {
            nombre: { type: 'string', example: 'María' },
            apellido: { type: 'string', example: 'González' },
            grado: { type: 'string', example: '5to' },
            seccion: { type: 'string', example: 'A' },
          },
        },
        Usuario: {
          type: 'object',
          properties: {
            id: { type: 'integer', example: 1 },
            nombre: { type: 'string', example: 'Vic Flores' },
            email: { type: 'string', example: 'vic@gmail.com' },
            rol: { type: 'string', enum: ['ADMIN', 'COORDINADOR'], example: 'COORDINADOR' },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: { error: { type: 'string', example: 'Mensaje descriptivo del error' } },
        },
      },
    },
  },
  apis: ['./src/docs/*.js'],
};

export const swaggerSpec = swaggerJsdoc(options);
