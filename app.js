var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./server/routes/index');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.use('/', index);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});
