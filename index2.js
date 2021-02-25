var Http = require( 'http' );
var fs= require ('fs');
var server = Http.createServer(function(request,response){

    fs.readFile('hola.html',function(err,datos){
      console.log('Alguien entró....123');
      rsponse.write(datos);
      response.end();
    });





});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
