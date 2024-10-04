const express = require("express");
const { handleGetUrl, handlePostUrl } = require("../controllers/url");
const router = express.Router();


router.post('/', handlePostUrl); 

router.get('/:id', handleGetUrl);


module.exports = router