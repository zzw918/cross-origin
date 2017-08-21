var express = require('express');
var path = require('path')
var app = express();
 
app.get('/test1.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/test1.html'));
})

app.get('/test3.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/test3.html'));
})

app.get('/proxy.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/proxy.html'));
})

const port = 8081;

var server = app.listen(port, function () {
  console.log("访问地址为 http://localhost:" + port)
});