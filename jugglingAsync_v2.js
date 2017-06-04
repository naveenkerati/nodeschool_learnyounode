var http = require('http');
var bl = require('bl');

http.get(process.argv[2],function(res){
			res.pipe(bl(function(err,data){
				if(err){ callback(err)}
				else{
				var result = data.toString();
				console.log("1------------------------");
				console.log(result);
				}
			}))
});

http.get(process.argv[3],function(res){
			res.pipe(bl(function(err,data){
				if(err){ callback(err)}
				else{
				var result = data.toString();
				console.log("2-------------------------------");
				console.log(result);
				}
			}))
});

http.get(process.argv[4],function(res){
			res.pipe(bl(function(err,data){
				if(err){ callback(err)}
				else{
				var result = data.toString();
				console.log("3----------------------------------");
				console.log(result);
				}
			}))
});
