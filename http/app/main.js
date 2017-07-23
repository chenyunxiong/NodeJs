var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandler');

var handle = {};
handle['/'] = requestHandlers.home;
handle['/about'] = requestHandlers.about;

server.start(router.route, handle);