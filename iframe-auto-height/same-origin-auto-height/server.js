var express = require('express');
var path = require('path')
var app = express();
 
app.get('/a.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/a.html'));
})

app.get('/b.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/b.html'));
})

app.get('/c.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/c.html'));
})

app.get('/d.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/d.html'));
})

const port = 8081;

var server = app.listen(port, function () {
  console.log("访问地址为 http://localhost:" + port)
});