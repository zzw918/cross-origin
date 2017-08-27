var express = require('express');
var path = require('path')
var app = express();
 
app.get('/html5.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/html5.html'));
})

app.get('/worker.js', function (req, res) {
  res.sendFile(path.resolve(__dirname, './www/worker.js'));
});

const port = 8081;

var server = app.listen(port, function () {
  console.log("访问地址为 http://localhost:" + port)
});