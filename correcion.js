function Saludar (){
  alert("Bienvenido/as a la seccion de Pedidos") 
  let nombreUsuario = prompt("Ingrese su nombre")
  alert("Hola " + nombreUsuario)
}

Saludar();
Saludar();

let num1,num2,suma,resta,multi,divi

function inicio() {
  num1 = prompt("Numero 1") 
  num2 = prompt("Numero 2")
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
}

function sumar(){
  if(num1 == undefined && num2 == undefined){
      alert("Tenes que cargar los numeros primero. Hace clic en 'Iniciar'")
  }else{
      suma = num1 + num2
      console.log("La suma de "+num1+" y "+num2+" es "+suma)
  }
}
function restar(){
  if(num1 == undefined && num2 == undefined){
      alert("Tenes que cargar los numeros primero. Hace clic en 'Iniciar'")
  }else{
      resta = num1 - num2
      console.log("La resta de "+num1+" y "+num2+" es "+resta)
  }
}

function producto(){
  if(num1 == undefined && num2 == undefined){
      alert("Tenes que cargar los numeros primero. Hace clic en 'Iniciar'")
  }else{
      multi = num1*num2
      console.log("El producto de "+num1+" y "+num2+" es "+multi)
  }
}

function division(){
  if(num1 == undefined && num2 == undefined){
      alert("Deber cargar los numeros primero. Hace clic en 'Iniciar'")
  }else{
      if(num1 === 0 || num2 === 0){
          console.log("No es posible dividor por 0")
      }else{
          divi = num1/num2
          console.log("La division de "+num1+" y "+num2+" es "+divi)
      }
  }
}