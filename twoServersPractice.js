var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

// Create your Handler
function handleRequest1(request,response){
	response.end("You can DO IT!!!!");
}

function handleRequest2(request,response){
	response.end("Try harder!");
}

// The handleRequest is the callback that will be fired
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2)

// Listener
server1.listen(PORT1,function(){
	console.log("server listening on http://localhost:"+PORT1);
});

server2.listen(PORT2,function(){
	console.log("server listening on http://localhost:"+PORT2);
});