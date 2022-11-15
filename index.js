const express = require('express');
const bodyParser = require('body-parser');
const App = express();

let Port = 3000;

App.use(bodyParser.json());

App.get('/Home', (req, res) => {
    res.send("Pakistan Zindabad")
})

App.listen(Port, () => {
    console.log("Server Connected")
})