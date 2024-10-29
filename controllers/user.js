const USER = require("../models/user");


const handleSignup = async (req, res) => {
    const { fullName, email, password } = req.body;

    const newUser = new USER({
        fullName,
        email,
        password
    })
    await newUser.save();
    // return res.status(201).json({ Success: "User Created" })
    return res.redirect("/")
}

const handleLogin = async (req, res) => {
    const { email } = req.body;
    const user = await USER.findOne({ email });
    if (!user) {
        res.status(400).json({ error: "Invalid credentials" })
    }
    // return res.json({ message: "Login Successful"})
    return res.redirect("/")
}

module.exports = {
    handleLogin,
    handleSignup
}