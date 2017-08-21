var express = require('express');
var path = require('path')
var app = express();
 
app.get('/b.html', function (req, res) {
   res.sendFile(path.resolve(__dirname,  './www/b.html'));
})

const port = 8088;

var server = app.listen(port, function () {
  console.log("访问地址为 http://localhost:" + port)
});