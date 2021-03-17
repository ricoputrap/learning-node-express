const { request } = require("express");
const express = require("express");
const router = express.Router();
const controller = require('../controller/user');

router.route('/users')
  .get(controller.index)
  .post(controller.store)

router.route('/users/:id')
  .put(controller.update)
  .delete(controller.delete)

module.exports = router;