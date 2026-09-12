const express = require('express');
const app = express();

const projects = [
  { name: 'Weather app', tag: 'javascript' },
  { name: 'Portfolio site', tag: 'express' },
  { name: 'Budget tracker', tag: 'python' },
];

app.get('/projects', (req, res) => {
  const tag = req.query.tag;

  if (tag === undefined) {
    return res.json(projects); // no tag -> return all projects 
  }

  const matches = projects.filter(p => p.tag === tag);
  res.json(matches); // no matches → empty array, not an error/message
});

app.listen(3000, () => console.log('Server running on port 3000'));