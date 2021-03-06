const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 8000;


// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/Users");
var WalletRouter = require("./routes/Wallet");
var FoodRouter = require("./routes/FoodItems");
var OrderRouter = require("./routes/Orders");
var StatisticsRouter = require("./routes/Statistics");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect('mongodb+srv://shreyash:ak0909@canteenportal.oujkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/user", UserRouter);
app.use("/food", FoodRouter);
app.use("/wallet", WalletRouter);
app.use("/order", OrderRouter);
app.use("/statistics", StatisticsRouter);


app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
