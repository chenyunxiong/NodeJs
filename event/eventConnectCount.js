var http = require('http');
var events = require('event');
var server = http.createServer();

server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('connet count');
    sonsole.log('connect count');
});

server.on('request', function(req, res) {
    res.write('\n bbbb, 222');
    console.log('bbbb');
    res.end();
});

server.listen(1337, '127.0.0.1');
console.log('Server running at http://localhost');

var num = events.EventEmitter.listenerCount(server,'request');
console.log(num);
