export const apiKey = (req, res, next) => {
  const expectedKey = process.env.API_KEY;

  if (!expectedKey) {
    return next();
  }

  const claveRecibida = req.header('x-api-key');

  if (!claveRecibida || claveRecibida !== expectedKey) {
    return res.status(401).json({
      error: 'API key invalida o ausente',
    });
  }

  next();
};

