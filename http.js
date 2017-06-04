var http = require('http');
http.get(process.argv[2],function(res){
		res.on('data',function(chunck){ console.log(chunck.toString());
		//		console.log("called");
		});
	});
