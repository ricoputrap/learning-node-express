const express = require("express");
const router = express.Router();

router.route('/users')
  .get((request, response) => {
    response.send('Get USERS');
  })
  .post((request, response) => {
    response.send('Post Users');
  })
  .put((request, response) => {
    response.send('Put Users');
  })
  .delete((request, response) => {
    response.send('Delete Users');
  })

  module.exports = router;