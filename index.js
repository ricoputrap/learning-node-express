const { response, request } = require('express');
const express = require('express');
const app = express();
const port = 3000;

const userRouter = require('./router/users');

// routing: `app.METHOD(PATH, HANDLER)`| METHOD: get, post, put, delete
app.get('/', (request, response) => {
  // send: memberikan response dalam bentuk string dan tipe data lainnya untuk ditampilkan ke dalam halaman web browser
  response.send('Hello World!');
});

app.get('/about', (request, response) => {
  response.redirect('/users')
})

// Route Parameters
app.get('/users/:id', (request, response) => {
  response.send(request.params); // contoh output: { id: 3 }
})

// Route with JSON response
app.get('/users-json', (request, response) => {
  const users = {
    id: 1,
    name: "Paijo"
  }
  response.json(users)
})

// use the defined router for users
app.use(userRouter);

app.listen(port, () => {
  console.log("YES, SERVER IS RUNNING!");
})