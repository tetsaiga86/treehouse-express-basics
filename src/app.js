'use strict';

var express = require('express');

var app = express();
app.get('/', function (req, res) {
  res.send('<h1>fuck you!</h1>')
});
app.listen(3000, function () {
  console.log('The server is running on port 3000!');
});
