const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000; //Environment variable port or port 4000

//Connects to database
mongoose
    .connect(process.env.MONG_URI, { useNewUrlParser: true })
    .then((r) => console.log(`MongoDB Atlas Connected`))
    .catch((error) => console.log(error));

mongoose.Promise = global.Promise;

app.use(express.json());

app.use("/Products", require("./routes/record"));


// application listens for server launch
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});



