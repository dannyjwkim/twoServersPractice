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

// One that listens on port 7000 and one that listens on port 7500. 
// The one listening on port 7000 will always tell the user something good about themselves. 
// The one listening on 7500 will always tell the user something bad about themselves. 
// Make sure you create a Github repo and *commit this code!* 

// >:moneybag:*BONUS!!*
// >Look for other ways to expand what your server can do. Possibilities:  Generate the good/bad
// phrase randomly from a list of predefined phrases OR use the twitter package inside the response
// to also return a random tweet