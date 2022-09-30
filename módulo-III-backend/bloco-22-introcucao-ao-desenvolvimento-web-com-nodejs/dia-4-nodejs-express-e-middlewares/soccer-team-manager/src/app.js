const express = require('express');
require('express-async-errors');
const cors = require('cors'); // liberando acesso ao frontend
const morgan = require('morgan');
const apiCredentials = require('./middlewares/apiCredentials');

const teamsRouter = require('./routes/teamsRouter');

const app = express();
app.use(express.json());
app.use(morgan('dev'));
// app.use(express.static('./images'));

app.use(apiCredentials);
app.use('/teams', teamsRouter);

app.use(cors()); // liberando acesso ao frontend

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;