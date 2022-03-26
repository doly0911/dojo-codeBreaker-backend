const express = require("express");
const app = express();
const cb = require('./codeBreaker');

const random = cb.getRandom()

app.post("/secret", (req, res) =>{
    cb.setSecret(random)
    res.json({
        result:  'Secret has been set'
    });
});

app.get("/match", (req, res) =>{
    const val = parseInt(req.query.val);
    res.json(cb.match(`${val}`));
});

app.get("/getAttempts", (req, res) =>{
  res.json({
      result: cb.getAttempts()
  });
});

//exports app module
module.exports = app;