import test from 'node:test';
import assert from 'node:assert/strict';

process.env.JWT_SECRET = 'test-secret';

const { registrar, iniciarSesion } = await import('../src/services/auth.service.js');

test('registrar crea un usuario y iniciarSesion genera un token', async () => {
  const usuario = await registrar({
    nombre: 'Ana',
    email: 'ana@example.com',
    password: '12345678',
  });

  assert.equal(usuario.email, 'ana@example.com');
  assert.ok(usuario.id);

  const respuesta = await iniciarSesion({
    email: 'ana@example.com',
    password: '12345678',
  });

  assert.ok(respuesta.token);
  assert.equal(respuesta.usuario.email, 'ana@example.com');
});

test('registrar rechaza un email duplicado', async () => {
  await assert.rejects(
    () => registrar({ nombre: 'Luis', email: 'ana@example.com', password: '12345678' }),
    (error) => {
      assert.equal(error.statusCode, 409);
      assert.match(error.message, /Ya existe/i);
      return true;
    },
  );
});
