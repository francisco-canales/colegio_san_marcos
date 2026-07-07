/**
 * @swagger
 * /api/alumnos:
 *   get:
 *     summary: Lista todos los alumnos
 *     tags: [Alumnos]
 *     parameters:
 *       - in: query
 *         name: grado
 *         schema:
 *           type: string
 *         description: Filtra los resultados por grado
 *     responses:
 *       200:
 *         description: Lista de alumnos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Alumno'
 */

/**
 * @swagger
 * /api/alumnos/{id}:
 *   get:
 *     summary: Obtiene un alumno por su ID
 *     tags: [Alumnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del alumno
 *     responses:
 *       200:
 *         description: Alumno encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alumno'
 *       404:
 *         description: Alumno no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api/alumnos:
 *   post:
 *     summary: Registra un nuevo alumno
 *     tags: [Alumnos]
 *     security:
 *       - apiKeyAuth: []
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NuevoAlumno'
 *     responses:
 *       201:
 *         description: Alumno creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alumno'
 *       400:
 *         description: Faltan campos requeridos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       401:
 *         description: API key o token inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: El rol del usuario no tiene permiso para esta acción
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api/alumnos/{id}:
 *   patch:
 *     summary: Actualiza parcialmente los datos de un alumno
 *     tags: [Alumnos]
 *     security:
 *       - apiKeyAuth: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del alumno
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               apellido:
 *                 type: string
 *               grado:
 *                 type: string
 *               seccion:
 *                 type: string
 *     responses:
 *       200:
 *         description: Alumno actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Alumno'
 *       401:
 *         description: API key o token inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: El rol del usuario no tiene permiso para esta acción
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Alumno no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

/**
 * @swagger
 * /api/alumnos/{id}:
 *   delete:
 *     summary: Elimina un alumno
 *     tags: [Alumnos]
 *     security:
 *       - apiKeyAuth: []
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del alumno
 *     responses:
 *       204:
 *         description: Alumno eliminado correctamente, sin contenido en la respuesta
 *       401:
 *         description: API key o token inválido
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       403:
 *         description: Solo el rol ADMIN puede eliminar alumnos
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 *       404:
 *         description: Alumno no encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */

export {};
