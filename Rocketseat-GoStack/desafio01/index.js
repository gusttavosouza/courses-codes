const express = require('express');

const server = express();
server.use(express.json())
const projects = [];
let count = 0; 


function checkProjectExist(req, res, next){
  const { id } = req.params;
  if( projects.findIndex(project => project.id === id) === -1){
    return res.status(400).json({ error: 'Project does exist!!!'})
  }
  return next();
}

server.use((req, res, next) => {
  count+=1;
  console.log(`Foram feitas ${count} Requisições`);
  return next();
})

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  projects.push({ id, title, tasks: []})
  return res.json(projects);
})

server.get('/projects', (req, res) => {
  return res.json(projects);
})

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const projectEdit = projects.findIndex(project => project.id === id);
  projects[projectEdit].title = title; 
  return res.json(projects)
})

server.delete('/projects/:id', (req, res) => {
  const { id } = req.params;
  const indexDeleted = projects.findIndex(project => project.id === id)
  projects.slice(indexDeleted, 1)
  return res.json(projects)
})

server.post('/projects/:id/tasks', checkProjectExist, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const indexDeleted = projects.findIndex(project => project.id === id)
  projects[indexDeleted].tasks.push(title)
  return res.json(projects);
})

server.listen(3000);
