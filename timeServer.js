var net = require('net');
var date = new Date();
var server = net.createServer(function(socket){
		var year = date.getFullYear();
		var month = (date.getMonth()+1).toString().length === 1 ? "0"+(date.getMonth()+1):(date.getMonth()+1);
		var currentDate = (date.getDate()+1).toString().length == 1 ? "0"+(date.getDate()):date.getMonth();
		socket.end(year+"-"+month+"-"+currentDate+" "+date.getHours()+":"+date.getMinutes()+"\n");

});

server.listen(Number(process.argv[2]));
