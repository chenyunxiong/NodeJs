var http = require('http');
var server = http.createServer();

server.on('myevent', function(arg){
    console.log(arg);
});

server.emit('myevent','chen');

server.listen(1337, '127.0.0.1');
console.log('Server running at http://localhost:1337');
