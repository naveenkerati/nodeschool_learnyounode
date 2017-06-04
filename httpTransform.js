var http = require('http');
var map = require('through2-map');
var server = http.createServer(function(req,res){
			req.pipe(map(function(chunck){
					return chunck.toString().toLocaleUpperCase();
			})).pipe(res);
});
server.listen(Number(process.argv[2]));
