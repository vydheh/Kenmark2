
 const usercontrol = require('../Controllers/user')

  const express = require('express');

  const router = express.Router();

  router.post('/register',usercontrol.insertuser);

  module.exports = router;