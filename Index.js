const express = require("express");
const app = express();

const mongoose = require("mongoose");

const PORT = 8000;


const urlRouter = require("./routes/url");
const staticRoute = require("./routes/staticRoutes");
const userRouter = require("./routes/user");


mongoose.connect("mongodb://127.0.0.1:27017/urlshortner")
    .then(() => console.log("Database connected"))
    .catch(err => console.log("Error in connecting database", err));


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');


app.use('/url', urlRouter);

app.use('/', staticRoute);

app.use('/user', userRouter);

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});

