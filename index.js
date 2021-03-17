const { response, request } = require('express');
const express = require('express');
const app = express();

// use body-parsing MIDDLEWARE to populate req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/**
 * Middleware for checking user login status
 */
const checkLoginStatus = (request, response, next) => {
  console.log("EXECUTED FIRST!!! - LOGGED IN!");
  request.token = "ABCKASJSASASAMSA";
  next();
}
app.use(checkLoginStatus);

const port = 3000;
const userRouter = require('./router/users');

// routing: `app.METHOD(PATH, HANDLER)`| METHOD: get, post, put, delete
app.get('/', (request, response) => {
  console.log("EXECUTED AFTER MIDDLEWARE!!! - GET HELLO!")
  // send: memberikan response dalam bentuk string dan tipe data lainnya untuk ditampilkan ke dalam halaman web browser
  const kelas = {
    id: 1,
    name: "Express JS",
    token: request.token
  }
  response.json(kelas);
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