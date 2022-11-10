const express = require('express');
const mongoose = require('mongoose');
const productModel = require("./models/products");
const app = express();

const PORT = process.env.PORT || 4000; //Environment variable port or port 4000

const mongoAtlasUri = "mongodb+srv://BrandoDioDa:<password>@cluster.tmn3tfw.mongodb.net/?retryWrites=true&w=majority";
try {
    // Connect to the MongoDB cluster
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("Mongoose is connected")
    );

} catch (e) {
    console.log("could not connect");
}

// application listens for server launch
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
});

app.get("/insert", (req, res) =>{
    productModel.prodName = "test";
    productModel.prodType = "Type";
    productModel.price = "$12223";

})

