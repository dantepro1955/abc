


var net =require("net");

var server1 = net.createServer();
server1.on("connection",function(socket){
  

	  console.log("NET CONNECTION SOME WHERE");
	  socket.on("data",function(data){

                 console.log("DATA NET");
                 console.log(data.length);
    
		});
	
		socket.on("close",function(){
		  console.log("closed");
		});
		
		socket.on("error",function(){
		  console.log("error");
		});
}
);

var PORT2 = process.env.PORT || 80;

server1.listen(PORT2,function(){
   console.log("PORT2 CONNECT SUCCESFULL LOL");
   console.log(PORT2);
   var host = server1.address().address;
   var port = server1.address().port;
   
   console.log("SV2://%s:%s", host, port);
});


//************************

