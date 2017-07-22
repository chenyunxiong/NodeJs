var http = require('http');
var server = http.createServer();

function callback(req, res){
    
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('hello world');
    console.log('Hollo world');
    res.end();
}

server.on('request',callback);

server.removeListener('request',callback);
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('haha');
    console.log('hha');
    res.end();
});

server.listen(1337,'127.0.0.1');
console.log('Server running at http://localhost');
