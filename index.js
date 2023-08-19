const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', require('./api.js'));

app.listen(80, () => {
    console.log("Server running on port 80");
});