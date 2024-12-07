
const {handleCreateNewUser,handleLogin}= require('../controllers/user');


const express = require("express");
var router = express.Router();

router.route('/signup').post(handleCreateNewUser);
router.post('/login', handleLogin)
 module.exports = router;
