const express = require('express');
const app = express()
const port = process.env.port || 8000;
const mongoose = require("mongoose");
const { mongoUrl } = require("./keys");
const cors = require("cors");

app.use(cors())
require('./models/model')
app.use(express.json())
app.use(require("./routes/auth"))

mongoose.connect(mongoUrl);

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})