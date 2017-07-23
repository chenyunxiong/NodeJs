// 加载所需模块
var http = require('http');
var url = require('url');
var fs = require('fs');

// 设置ip和端口： 实际应用中，可以写到配置文件中
var host = '127.0.0.1',
    port = 8080;
	
// 创建http server
function start(route, handle) {
	// route: 
	// handle: 
	
	function onRequest(req, res){
		var pathname = url.parse(req.url).pathname;
		
		console.log('Request for' + pathname + ' received.');
		route(handle, pathname, res, req);
	}
	
	http.createServer(onRequest).listen(port, host);
	console.log('Server has started and listening on ' + host + ':' + port);
}



exports.start = start;