

var net =require("net");

var server1 = net.createServer();
server1.on("connection",function(socket){
    //var remoteAddress = socket.remoteAddress + ":" +socket.remotePort;

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


server1.listen(process.env.PORT || 80,function(){
   console.log("listen on: %d",process.env.PORT);
});


//************************

