const fs = require('fs')
const cors = require('cors');
const express = require('express')
const app = express()
const port = 3100

app.use(express.static('public'));
app.use(cors());

const users = JSON.parse(fs.readFileSync("users.json"));

app.get('/users', (req, res) => {
  res.json(users);
})

app.get('/users/:id', (req, res) => {
  let id = req.params.id;
  let user = users[id];

  if (!user)
    return res.status(404).send(`User with id [${id}] not found.`)

  return res.json(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})