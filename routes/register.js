const express = require('express');
const router = express.Router();
const {handleNewUser} = require('../Controllers/registerController')

router.post('/',handleNewUser);

module.exports = router;