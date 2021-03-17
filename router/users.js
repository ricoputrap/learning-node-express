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
    // response.json(users);
    if (users.length > 0) {
      response.json({
        status: true,
        data: users,
        method: request.method,
        url: request.url
      })
    }
    else {
      response.json({
        status: false,
        message: "Data users masih kosong"
      })
    }
  })
  .post((request, response) => {
    users.push(request.body);
    response.json({
      status: true,
      message: "Data user telah berhasil disimpan!",
      data: users,
      method: request.method,
      url: request.url
    });
  })

router.put('/users/:id', (request, response) => {
  const id = request.params.id;
  users.forEach(user => {
    if (user.id == id) {
      user.name = request.body.name;
      return user;
    }
  });
  response.json({
    status: true,
    message: "Data user telah berhasil diperbarui!",
    data: users,
    method: request.method,
    url: request.url
  });
});

router.delete('/users/:id', (request, response) => {
  const id = request.params.id;
  users = users.filter(user => user.id != id);
  response.json({
    status: true,
    message: "Data user telah berhasil dihapus!",
    data: users,
    method: request.method,
    url: request.url
  });
})

module.exports = router;