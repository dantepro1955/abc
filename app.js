var net =require("net");

var server1 = net.createServer();
server1.on("connection",function(socket){

	  console.log("connect from %s",socket.remotePort );
	  socket.on("data",function(data){

                 console.log("data:%s|leng=%d",data,data.length);


		});
	
		socket.on("close",function(){
		  console.log("closed");
		});
		
		socket.on("error",function(){
		  console.log("error");
		});
}
);

var port = process.env.PORT||80;
server1.listen(port,function(){
   console.log("listen on: %d",port);

});




