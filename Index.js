const express = require("express");
const urlRouter = require("./routes/url");
const app = express();

const mongoose = require("mongoose");

const PORT = 8000;
mongoose.connect("mongodb://127.0.0.1:27017/urlshortner")
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Error in connecting database", err))

app.use(express.urlencoded({ extended: true }));


app.post('/url', urlRouter)

app.use('/', urlRouter)

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

