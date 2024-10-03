const express = require("express");
const { handleGetUrl, handlePostUrl } = require("../controllers/url");
const router = express.Router();

router.post('/url', handlePostUrl);

router.get('/:id', handleGetUrl);



module.exports = router