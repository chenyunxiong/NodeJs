var fs = require('fs');

fs.readFile('./test.txt', function(err, data){
	if(err)
	{
		// ��ȡʧ��
		throw err;
	}
	
	// ��ȡ�ɹ�
	console.log(data.toString());
});