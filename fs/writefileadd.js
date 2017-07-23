var fs = require('fs');

fs.writeFile('./writefileadd.txt', 'add message',{'flag':'a'},function(err){
	if(err)
	{
		throw err;
	}
	console.log("saved...");
});


fs.readFile('./writefileadd.txt',function(err, data){
	if(err)
	{
		throw err;
	}
	console.log(data.toString());	
});