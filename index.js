var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró....123');
    console.log(request.url);
    console.log(JSON.stringify(request));
    response.writeHead(400,"Content.Type:text/html");
    response.write("<style> h1 {color:blue} </style>")
    response.write("<h1>Hola ICO FES Aragon, la mejor carrera</h1>");

    response.end();
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
