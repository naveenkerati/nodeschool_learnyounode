var http = require('http');
var url = require('url');
var server = http.createServer(function(req,res){
			var resResult = {};
			res.writeHead(200,{'Content-Type': 'application/json'});
			var urlData = url.parse(req.url,true);
			//console.log(urlData);
			var date = new Date(urlData.query.iso);
			if(urlData.pathname==="/api/parsetime"){
				
				resResult.hour = date.getHours();
				resResult.minute = date.getMinutes();
				resResult.second = date.getSeconds();
				res.write(JSON.stringify(resResult));
				res.end();
	
			}else if (urlData.pathname==="/api/unixtime"){
				
				resResult.unixtime = date.getTime();
				res.write(JSON.stringify(resResult));
				res.end();

			}
});
server.listen(Number(process.argv[2]));
