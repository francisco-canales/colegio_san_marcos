import test from 'node:test';
import assert from 'node:assert/strict';
import { randomUUID } from 'node:crypto';
import { verificarToken } from '../src/utils/token.js';

process.env.JWT_SECRET = 'test-secret';

const { registrar, iniciarSesion, cambiarPassword } = await import('../src/services/auth.service.js');

test('registrar crea un usuario y iniciarSesion genera un token', async () => {
  const email = `ana-${randomUUID()}@example.com`;
  const usuario = await registrar({
    nombre: 'Ana',
    email,
    password: '12345678',
  });

  assert.equal(usuario.email, email);
  assert.equal(usuario.rol, 'COORDINADOR');
  assert.ok(usuario.id);

  const respuesta = await iniciarSesion({
    email,
    password: '12345678',
  });

  assert.ok(respuesta.token);
  assert.equal(respuesta.usuario.email, email);
  assert.equal(respuesta.usuario.rol, 'COORDINADOR');
  assert.equal(verificarToken(respuesta.token).rol, 'COORDINADOR');
});

test('registrar rechaza un email duplicado', async () => {
  const email = `luis-${randomUUID()}@example.com`;

  await registrar({ nombre: 'Luis', email, password: '12345678' });

  await assert.rejects(
    () => registrar({ nombre: 'Luis', email, password: '12345678' }),
    (error) => {
      assert.equal(error.statusCode, 409);
      assert.match(error.message, /Ya existe/i);
      return true;
    },
  );
});

test('cambiarPassword impide modificar la contraseña de otra cuenta', async () => {
  const email = `maria-${randomUUID()}@example.com`;
  const usuario = await registrar({
    nombre: 'María',
    email,
    password: '12345678',
  });

  await assert.rejects(
    () => cambiarPassword(usuario.id, {
      passwordActual: '12345678',
      passwordNueva: '87654321',
    }, 999999),
    (error) => {
      assert.equal(error.statusCode, 403);
      assert.match(error.message, /permiso/i);
      return true;
    },
  );
});
