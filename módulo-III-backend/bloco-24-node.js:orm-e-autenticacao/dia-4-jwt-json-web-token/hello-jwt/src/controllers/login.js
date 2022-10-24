const Joi = require('joi');

const service = require('../services/User');
const { validateCredentials } = require('./utils/validateCredentials');

const validateBody = (body) =>
  Joi.object({
    username: Joi.string().min(5).alphanum().required()
    .messages({
      'string.min': '"username" length must be 5 characters long',
      'string.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'string.required': '"password" is required',
    }),
  }).validate(body);

module.exports = async (req, res, next) => {
  const { error } = validateCredentials(req.body);
  const { error } = validateBody(req.body);

  if (error) return next(error);

  const { username, password } = req.body;

  const { error: serviceError, token } = await service.login(username, password);

  if (serviceError && serviceError.code === 'invalidCredentials') {
    return next({ statusCode: 401, message: serviceError.message });
  }

  if (serviceError) {
    return next(serviceError);
  }

  res.status(200).json({ token });
};