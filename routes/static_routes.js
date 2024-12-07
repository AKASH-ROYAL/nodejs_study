const express = require("express");
const {restrictToLoggedInUsersOnly}= require('../services/middware')


var app = express();
const URL = require('../models/url');

var router = express.Router();

router.get('/',restrictToLoggedInUsersOnly, async (req, res) => {
    var urls = await URL.find({createdBy: req.user.id});
    return res.render('home', {
        urls: urls
    })
});

router.get('/signup', (req, res) => {

    return res.render('signup');
});
router.get('/login', (req, res) => {
var error= req.query?.error;
    return res.render('login',{error});
})


module.exports = router;
