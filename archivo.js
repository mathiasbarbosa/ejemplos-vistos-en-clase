// PRIMER ENTREGA DEL PROYECTO, CARRITO DE COMPRAS DE PERSONAJES EN TIENDA DE VIDEO-JUEGO

//CARRITO DE COMPRAS DE PERSONAJES EN UN VIDEOJUEGO

class personaje { 
  constructor (nombre, precio, caracteristica, cantidad) {
      this.nombre = nombre; 
      this.precio  = parseFloat(precio); 
      this.caracteristicas = caracteristica;
      this.cantidad = cantidad; 
      this.disponible = true;
  
  }
  sumarEnvio () {
  return  this.precio  + 500; 
  }
  vender (){
  this.disponible = false;
}
precioSugerido (){
  return this.precio +500 +1000;
  }}
let arraypersonaje = [];
do {
   var solicitar = prompt("Ingrese personaje");
   if (solicitar === "ok" ) {
       break; 
   } else{
         NombrePersonaje = solicitar;
         var precioPersonaje = prompt ("Ingrese codigo del personaje");
         var caracteristicaPersonaje = prompt ("Ingrese caracteristicas del personaje");
         var cantidadPersonaje = prompt ("Ingrese la cantidad");
         arraypersonaje.push (new producto(nombrePersonaje, precioPersonaje, caracteristicaPersonaje, cantidadPersonaje));
   }
  }while (solicitar != "ok")
