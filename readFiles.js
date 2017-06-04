var fs = require('fs');
fs.readdir(process.argv[2],function(err,data){
		var count = 0;
		if(err){
			console.log(err);
		}else{
		var files = data.filter(function(file){
		if (file.split('.').length>1){
		return file.split('.').pop()===process.argv[3];					}else return false;
});
files.forEach(function(ele){		
console.log(ele);
		});
	}});			
