var express = require('express'),
    mongoose = require('mongoose'),
    serverConfig = require('./config/config'),
    bodyParser = require('body-parser');

mongoose.connect(serverConfig.db);
require('./middleware/models');

var server = express();

server.use(bodyParser.json());
server.use('/:controller/:action', require('./middleware/controllers'));
server.use(express.static('assets'));
server.use(express.static('client'));

server.listen(4455, function () {
    console.log('Server running at 4455');
});