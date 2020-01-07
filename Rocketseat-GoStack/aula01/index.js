const express = require('express');

const server = express();
server.use(express.json())
// QUERY PARAMS = ?testes=1
// ROUTE PARAMS = /users/1
// REQUEST BODY = { "name" : "Gustavo Roberto"}

//CRUD = CRAETE, READ, UPDATE, DELETE

const users = ['Diego', 'Claudio', 'Victor'];

function checkUserExists(req, res, next){
  if(!req.body.name) {
    return res.status(400).json({error: 'User not exist'})
  }
  return next();
}

function checkUserInArray (req, res, next){
  const user = users[req.params.index];
  if(!user){
    return res.status(400).json({ error: 'User does not exists'})
  }
  req.user = user;
  return next();
}

server.use((req, res, next) => {
  console.time('Request');
  console.log(`Metodo: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');
})

server.get('/users', (req, res) => {
  return res.json(users)
})

server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.user)
})

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;
  
  users.push(name);

  return res.json(users);
})

server.put('/users/:id', checkUserExists, checkUserInArray, (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  users[id] = name;
  return res.json(users);
})

server.delete('/users/:id', checkUserInArray, (req, res) => {
  const { id } = req.params;
  users.splice(id, 1);
  return res.json(users)
});


server.listen(3000);
