const express = require('express');

const app = express();
app.use(express.json());

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];
// LISTA ATIVIDADE A PARITR DO ID
app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const activity = activities.find((act) => act.id === Number(id));
  res.status(200).json(activity);
})

// LISTA TODAS AS ATIVIDADES
app.get('/myActivities', (req, res) => res.status(200).json({ activities }))

// LISTA ATIVIDADES FILTRADAS PELO STATUS
app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  const statusActivities = activities.filter((act) => act.status === status);
  res.status(200).json({ activities: statusActivities });
})

// LISTA ATIVIDADES POR TERMO
app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  const descriptionActivities = activities.filter((act) => act.description.includes(q));
  res.status(200).json({ activities: descriptionActivities });
})

module.exports = app;