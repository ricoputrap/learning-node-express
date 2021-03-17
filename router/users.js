const { request } = require("express");
const express = require("express");
const router = express.Router();

// dummy data
let users = [
  { id: 1, name: "Rico"},
  { id: 2, name: "Putra"},
  { id: 3, name: "Pradana"},
]

router.route('/users')
  .get((request, response) => {
    response.json(users);
  })
  .post((request, response) => {
    users.push(request.body);
    response.send(users);
  })

router.put('/users/:id', (request, response) => {
  const id = request.params.id;
  users.forEach(user => {
    if (user.id == id) {
      user.name = request.body.name;
      return user;
    }
  });
  response.json(users);
});

router.delete('/users/:id', (request, response) => {
  const id = request.params.id;
  users = users.filter(user => user.id != id);
  response.json(users)
})

module.exports = router;