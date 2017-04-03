var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");

var PORT = process.env.PORT||80;

server.listen(PORT);
//***
server.on("connection",function(socket){
	  console.log("connect moi" );
	  socket.on("data",function(data){

                 console.log("co data den");
                 io.sockets.emit('sim900', data);
                 console.log("PORT LA:");console.log(PORT);
		});
	
		socket.on("close",function(){
		  console.log("closed");
		});
		
		socket.on("error",function(){
		  console.log("error");
		});
}
);
//***

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
        console.log("PORT LA:");	
console.log(PORT);
console.log(req);console.log(res);
console.log("addres_LA:");console.log(__dirname);
});




io.sockets.on('connection', function (socket) {
  // ket noi thiet bi hien tai , ngat kn thiet bi cu

  console.log("Co nguoi connect");
  
  socket.emit('sim900', "Thanh cong");

  socket.on('disconnect',function(data){
  console.log('disconnected');
  }); 

  socket.on('tintuweb',function(data){
  console.log(data);
  }); 
 
});




/// *********************

var net =require("net");

var server1 = net.createServer();
server1.on("connection",function(socket){
  

	  console.log("NET CONNECTION SOME WHERE");
	  socket.on("data",function(data){

                 console.log("DATA NET");
    
		});
	
		socket.on("close",function(){
		  console.log("closed");
		});
		
		socket.on("error",function(){
		  console.log("error");
		});
}
);

var PORT2 = process.env.PORT||9000;

server1.listen(PORT2,function(){
   console.log("PORT2 CONNECT SUCCESFULL LOL");
   console.log(PORT2);
});


//************************

