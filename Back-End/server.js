const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000; //Environment variable port or port 4000

//Connects to database
mongoose
    .connect(process.env.MONG_URI, { useNewUrlParser: true })
    .then((r) => console.log(`MongoDB Atlas Connected`))
    .catch((error) => console.log(error));

mongoose.Promise = global.Promise;

//app.use(express.json());
app.use(express.json());

app.use("/api/Products", require("./routes/Products"));
app.use("/api/Checkouts", require("./routes/Checkout"));
app.use("/api/Users", require("./routes/Users"));
app.use("/api/Coupons", require("./routes/Coupon"));


app.use((err, req, res, next) => {
    console.log(err);
    next();
})

// application listens for server launch
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});
