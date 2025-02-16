const { handleGenerateShortId }= require('../controllers/url');
const { handleRedirectUrl,handleAnalytics }= require('../controllers/url');
const { restrictToRoles }= require('../services/middware');

const express = require("express");
var router = express.Router();

router.route('/').post(handleGenerateShortId);
router.get('/:id', restrictToRoles(['ADMIN']),handleRedirectUrl);
router.get('/analytics/:id', handleAnalytics);


module.exports = router;

