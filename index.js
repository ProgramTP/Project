const express = require('express');
const app = express();
const fetch = require('node-fetch');
require('dotenv').config();

app.listen(5000, () => console.log("Listening on port 5000"));
app.use(express.static('frontend'));

app.get("/", (req, res) => {
    
})