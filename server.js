// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// > we've started you off with Express, 
// > but feel free to use whatever libs or frameworks you'd like through `package.json`.
// ok 


const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:test", function (request, response) {
  let req = request.params.test;
  let date= new Date(req);
  let res = {};
  res.unix = date.getTime();
  if (res.unix)
    res.natural = `${MONTHS[date.getMonth()]} ${date.getDate()}, ${1900 + date.getYear()}`;
  else 
    res.natural = null;
  response.json(res);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
