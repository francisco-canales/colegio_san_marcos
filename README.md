# API REST - Sistema de Colegio san Marcos

API REST desarrollada con Node.js y Express 

# Tecnologías Utilizadas

- Node.js
- Express.js
- MySQL
- JWT (JSON Web Token)
- bcrypt
- dotenv
- Swagger UI
- Postman

---

# Instalación del Proyecto

## 1. Clonar repositorio

```bash
git clone https://github.com/francisco-canales/colegio_san_marcos.git

cd colegio_san_marcos
```

## 2. Inicializar proyecto Node.js

```bash
npm init -y
```

## 3. Instalar dependencias

### Express

```bash
npm install express
```

### Variables de entorno

```bash
npm install dotenv
```

### Dependencias adicionales

```bash
npm install mysql2
npm install jsonwebtoken
npm install bcrypt
npm install cors
npm install swagger-ui-express
npm install swagger-jsdoc
```

### Dependencias de desarrollo

```bash
npm install nodemon --save-dev
```

---

# Configuración del archivo .env

Crear un archivo llamado:

```env
.env
```

Ejemplo:

```env
PORT=3000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=colegioMarcos

JWT_SECRET=miclave_super_segura
JWT_EXPIRES_IN=1d
```

---

# Configuración del package.json

Agregar el siguiente script:

```json
"scripts": {
  "dev": "nodemon src/index.js",
  "start": "node src/index.js"
}
```

---

# Ejecutar el Proyecto

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

---

