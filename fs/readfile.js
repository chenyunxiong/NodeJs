var fs = require('fs');

fs.readFile('./test.txt', function(err, data){
	if(err)
	{
		// 读取失败
		throw err;
	}
	
	// 读取成功
	console.log(data.toString());
});