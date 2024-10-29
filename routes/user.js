const express = require("express");
const { handleSignup, handleLogin } = require("../controllers/user");
const router = express.Router();


router.get('/signup', (req, res) => {
    return res.render("signup")
})

router.post('/signup', handleSignup);

router.get('/login', (req, res) => {
    return res.render("login")
})

router.post('/login', handleLogin);

module.exports = router;