const express = require('express');
const router = express.Router();
const {handleLogin} = require('../Controllers/authController')

router.post('/',handleLogin);

module.exports = router;