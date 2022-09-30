const { app } = require('express');
const express = require('express');
const crypto = require('crypto');
const nameValidation  = require('./Middlewares/nameValidation');
const priceValidation  = require('./Middlewares/priceValidation');
const descriptionValidation  = require('./Middlewares/priceValidation');
const auth  = require('./Middlewares/auth');

app.use(express.json());

app.post('/activities', nameValidation, priceValidation, descriptionValidation, (req, res) => {
  res.status(201).send({ message: "Atividade cadastrada com sucesso!" })
});

app.post('/signup', auth, (req, res) => {
  const { email, password, firstName, phone } = req.body;
  if([email, password, firstName, phone].includes(undefined)) res.status(401).json({ message: 'Campos ausentes!' })
  const token = crypto.randomBytes(8).toString('hex');
  res.status(200).json({ token });
});

module.exports = app;