const express = require('express');
const router = express.Router();
const loanController = require('../../Controllers/loanController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .post( loanController.createNewLoans)

module.exports = router    