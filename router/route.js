var express = require('express');
const { companyDetails, createcompanyDetails } = require('../controller/company');

var router = express.Router();


router.get('/company',companyDetails);
router.post('/createcompany',createcompanyDetails);



module.exports = router;

