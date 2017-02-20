var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/mean-sandbox');

http.createServer(app).listen(3000, function() {
  console.log('Server up and running');
});
