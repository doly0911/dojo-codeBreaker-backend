import express from "express";
import bodyParser from "body-parser";


//const cors = require('cors');
const { getSecretNumber, matchCodeBreaker } = require('./codeBreaker');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//app.use(cors());

app.get('/getSecret', getSecretNumber)
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.get('/match', matchCodeBreaker);

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
