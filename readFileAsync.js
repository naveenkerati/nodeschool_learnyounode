var fs = require('fs');
fs.readFile(process.argv[2],function(err,data){
		if(err){
			console.log(err);
		}else{
			var numberOfLines = data.toString().split('\n').length;
			console.log(numberOfLines-1);
		}
});
