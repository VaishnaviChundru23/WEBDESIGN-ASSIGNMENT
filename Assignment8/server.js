const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/UserDatabase";

const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
    console.log("DB connection established");
});

app.use(express.json());

const userRouter = require("./routes/user");
app.use("/user", userRouter);

app.listen(9000, () => {
    console.log("Server started succesfully and is live");
});