var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs = require("fs");

var PORT = process.env.PORT||80;

server.listen(PORT);
//***
server.on("connection",function(socket){
    //var remoteAddress = socket.remoteAddress + ":" +socket.remotePort;

	  console.log("connect + %s",socket.remotePort );
	  socket.on("data",function(data){

                 console.log("data:%s|leng=%d",data,data.length);
                 io.sockets.emit('sim900', data);
                 io.sockets.emit('sim900', "A|56|78|12|34|");
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
    //var remoteAddress = socket.remoteAddress + ":" +socket.remotePort;

	  console.log("connect + %s",socket.remotePort );
	  socket.on("data",function(data){

                 console.log("data:%s|leng=%d",data,data.length);
     
                 io.sockets.emit('sim900', data.toString());

		});
	
		socket.on("close",function(){
		  console.log("closed");
		});
		
		socket.on("error",function(){
		  console.log("error");
		});
}
);

var PORT2 = 9000;

server1.listen(PORT2,function(){
   console.log("***PORT2:");
console.log(process.env.PORT);
});


//************************

