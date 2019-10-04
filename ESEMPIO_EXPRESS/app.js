var express = require('express');
var app = express(); 
app.get('/', function (req, res) {
  res.send('I really just want to die PARAPAPAPAPAAAAAAAAAAAAA PARAPAPAPAPAAAAAAAAAAAAA');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
