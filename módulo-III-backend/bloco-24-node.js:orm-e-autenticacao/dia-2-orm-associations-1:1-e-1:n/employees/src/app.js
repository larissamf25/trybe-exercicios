const express = require('express');

const employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/employees/:id', employee.getById); // Lista todos os funcionários ou os endereços pelo id (depende do parâmetro na query)
app.get('/employees', employee.getAll);

module.exports = app;