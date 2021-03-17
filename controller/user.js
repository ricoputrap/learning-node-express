// dummy data - assume that we got the data from models
let users = [
  { id: 1, name: "Rico"},
  { id: 2, name: "Putra"},
  { id: 3, name: "Pradana"},
]

module.exports = {
  index: (request, response) => {
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
  },

  store: (request, response) => {
    users.push(request.body);
    response.json({
      status: true,
      message: "Data user telah berhasil disimpan!",
      data: users,
      method: request.method,
      url: request.url
    });
  },

  update: (request, response) => {
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
  },

  delete: (request, response) => {
    const id = request.params.id;
    users = users.filter(user => user.id != id);
    response.json({
      status: true,
      message: "Data user telah berhasil dihapus!",
      data: users,
      method: request.method,
      url: request.url
    });
  }
}