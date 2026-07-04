const usuarios = [];
let idActual = 1;

export const findAll = async () => {
  return usuarios.map(({ id, nombre, email, rol }) => ({ id, nombre, email, rol }));
};

export const findByEmail = async (email) => {
  return usuarios.find((usuario) => usuario.email === email.toLowerCase()) ?? null;
};

export const findById = async (id) => {
  return usuarios.find((usuario) => usuario.id === Number(id)) ?? null;
};

export const save = async ({ nombre, email, passwordHash, rol = 'COORDINADOR' }) => {
  const nuevoUsuario = {
    id: idActual++,
    nombre,
    email: email.toLowerCase(),
    passwordHash,
    rol,
  };

  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
};

export const updatePasswordHash = async (id, passwordHash) => {
  const usuario = await findById(id);

  if (!usuario) {
    return null;
  }

  usuario.passwordHash = passwordHash;
  return usuario;
};
