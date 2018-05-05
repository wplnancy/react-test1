const express = require('express')
const app = express();
const data = require('./data/images.js');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.listen(9000, function () {
  console.log('server is listening at 3000 port.');
});

app.get('/data', function (req, res) {
  console.log(req);
  res.json(data)
})
