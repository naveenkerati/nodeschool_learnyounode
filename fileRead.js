var fs = require('fs');
module.exports = function(dir,fileExtension,cb){
		fs.readdir(dir,function(err,data){
			var count = 0;
			if(err){
				console.log(err);
				cb(err);
			}else{
				var files = data.filter(function(file){
					if (file.split('.').length>1){
						return file.split('.').pop()===fileExtension;
					}else return false;
					});
				cb(null,filesq);
			}
});
}				

