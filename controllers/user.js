const User = require('../models/user');
const { v4: uuidv4 } = require('uuid');

const { setUser, getUser } = require('../services/auth');




async function handleCreateNewUser(req, res) {

    var { name, email, password } = req.body;
    await User.create({
        name: name,
        email: email,
        password: password,
        
    });

    return res.redirect('/login');
}


async function handleLogin(req, res) {
    var { email, password } = req.body;
    var user = await User.findOne({
        email,
        password
    });

    if (!user) return res.redirect('/login?error=Invalid%20Username%20or%20Password');


    var token= setUser( user);

    res.cookie('token', token);
return res.redirect('/');
    // return res.json({token});
}


module.exports = { handleCreateNewUser, handleLogin };