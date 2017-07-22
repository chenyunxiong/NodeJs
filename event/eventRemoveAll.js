var http = require('http');
var server = http.createServer();

server.on('request', function(req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write('aaaa, 111');
    console.log('aaaa');
    res.end();
});

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('bbbb, 222');
    console.log('bbbb');
    res.end();
});

server.removeAllListeners('request');

server.on('request', function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('ccc');
    console.log('cccc');
    res.end();
});


server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
