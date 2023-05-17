
var http = require("http")

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type" : "text/plain"});

    response.end("<h1>Hello Nhhhgggode!!!</h1>\n");
}).listen(4000);

console.log("le serveur fonctionne à l'adresse http://localhost:4000")