// Pedir número mediante prompt y si es mayor a 1000 mostrar un alert.

// let num1 = prompt("ingrese un numero"); 


// if (num1 > 1000) {
//     alert("tu numero ingresado es mayor a 1000, el numero es:  " + num1)
// }else{
//     alert("el numero ingresado es menor a 1000, el numero es " + num1)
// }

// Pedir un texto mediante prompt, y si es igual a "Hola" mostrar un alerta por consola.

// let textoIngresado = prompt("ingrese un texto")

// if ( (textoIngresado == "hola") || (textoIngresado == "HOLA") ) {
//     alert( "el texto ingresado fue " + textoIngresado )
// }


/// Pedir un número por prompt y evaluar si está entre 10 y 50. En caso positivo mostrar un alert.

// let numeroSolicitado = prompt("ingrese un numero")

// if ((numeroSolicitado >= 10) && (numeroSolicitado <= 50) ) {
    
//     alert(" el numero ingresado es " + numeroSolicitado + " Y esta entre 50 y 10 ")
// }else {
//     alert( "  el numero ingresado es " + numeroSolicitado )
// }

// let numero = parseInt(prompt("ingrese un numero"))
// console.log(numero);
// do {
//     if (numero == 7) {
//         alert("correcto el numero es " + numero)
//     }
//     else{
//         alert("numero incorrecto")

//     }
//     numero= parseInt(prompt("ingrese un numero"))
// } while (numero != 7)


// // declaramos la funcion 

// function suma(num1, num2 ) {

// return num1 + num2
// ///// hasta aca la funcion no recibe ningun dato, 
// //solo sabe que tiene que hacer una suma entre dos datos y retornarlo
// }

// /// ejecutamos la funcion

// suma(10,20) /// ahora 10 toma el lugar de num1 y 20 de num2

// let numero = parseInt(prompt("ingrese un numero"))
// for (let index = 0; index < 10; index++) {
    
//     console.log(numero * index);
    
// }
// let nombre = prompt("ingrese su nombre, para salir ingrese esc")
// while (nombre != "esc") {
//     alert("Hola " + nombre)
//     nombre = prompt("ingrese su nombre, para salir ingrese esc")
// }


// class Onjeto {
//     constructor(nombre,precio) {
//         this.nombre = nombre;
//         this.precio = precio
//     }

//     sumarIva() {
//         return console.log((this.precio * 0.21)+ this.precio) ;
//     }
// }

// const objeto = new Onjeto("teclado", 100)
// objeto.sumarIva()


class prestamo {
  constructor(credito, marca, cuota){
      this.credito = credito;
      this.marca = marca;
      this.cuota = cuota;
  }

  calcularcuotas(){
      console.log(this.marca, this.credito, this.cuota)
      let cuotas = this.calcularprestamo(this.marca, this.credito)/this.cuota
      return cuotas
  }


calcularprestamo(banco,credito){
  let interes;
  switch (banco) {
      case "honda":
          interes = 10.0
          break;

      case "yamaha":
          interes = 12.0
          break;

      case "suzuki": 
      interes = 11.0
      break;

      default:
          console.log ("marca no disponible")
          break;

  }
  return credito * interes
}
}

function capturar (){
  let creditocapturar = Number(prompt("ingrese el credito necesario"))
  let marcacapturar = prompt("ingrese la marca"). toLocaleLowerCase()
  let cuotacapturar = Number(prompt("ingrese la cantidad de cuotas"))

  const nuevocredito = new prestamo(creditocapturar, marcacapturar, cuotacapturar)

  console.log(nuevocredito)
  mostrar (nuevocredito)

}

function mostrar(cliente){
  console.log("las cuotas seran de: $" + cliente.calcularcuotas())
}

capturar()