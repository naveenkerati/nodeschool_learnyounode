var http = require('http');
var async =require('async');
var bl = require('bl');

var callOne = function(callback){
		http.get(process.argv[2],function(res){
			res.pipe(bl(function(err,data){
				if(err){ callback(err)}
				else{
				var result = data.toString();
				callback(null,result);
				}
			}))
});
}
var callTwo = function(callback){
		http.get(process.argv[3],function(res){
			res.pipe(bl(function(err,data){
				if(err){ callback(err)}
				else{
				var result = data.toString();
				callback(null,result);
				}
			}))
});
}
var callThree = function(callback){
		http.get(process.argv[4],function(res){
			res.pipe(bl(function(err,data){
				if(err){ callback(err)}
				else{
				var result = data.toString();
				callback(null,result);
				}
			}))
});
}
async.parallel([callOne,callTwo,callThree],function(err,results){
				results.forEach(function(result){
							console.log(result);
							//console.log("-------------------------------");
						});
		});
