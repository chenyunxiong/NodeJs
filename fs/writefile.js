var fs = require('fs');

fs.writeFile('./test2.txt', 'maybe this is', function(err){
	if(err)
	{
		throw err;
	}
	
	console.log('Saved..');
});

fs.readFile('./test2.txt',function(err,data){
	if(err)
	{
		throw err;
	}
	console.log(data.toString());
});
