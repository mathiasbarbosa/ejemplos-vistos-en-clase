
// ---------------------------------CLASE 1---------------------------------------

/*let nombre = prompt ("ingrese su nombre")
let apellido = prompt ("ingrese su apellido")

console.log ("bienvenido a nuestra app web" + "" + nombre + apellido);*/




// -----------------------------------CLASE 2-----------------------------------

// Pedir un número mediante prompt

/*let num1 = prompt ("Ingrese un numero");
 if( num1 > 1000){
     alert ("Tu numero ingresado es mayor a 1000, tu numero es: " + num1)
}else{
     alert ("el numero es menor a 1000, el numero es: " + num1)
}*/




// Pedir un texto mediante prompt, y si es igual a Hola mostrar un alert

/*let  textoIngresado = prompt("Ingrese un texto");
if (textoIngresado == "Hola"){
    alert ("el texto ingresado fue "+ textoIngresado)
}*/




//pedir un num por promop y ver si esta entre 10 y 50 

/*let numeroSolicitado = prompt ("ingrese un num")
if ( (numeroSolicitado >=10) && (numeroSolicitado<=50) ){
    alert ("el numero ingresado es: " + numeroSolicitado + "y esta entre 10 y 50")
}else{
    alert("el numero ingresado es: " + numeroSolicitado)
}*/


// ------------------------CLASE 3 DESAFIO COMPLEMENTARIO---------------------------

// ej: turnos

/*for(let t= 1; t<=15; t++){
    let nombre= prompt ("Ingresar nombre y apellido");
    alert ("Turno N° " + t + "Nombre: " + nombre)
}*/

// lo mismo con switch

// let turnos = prompt ("Turnos disponibles en el mes de febrero, elija una fecha.")

/*while(turnos != "ESC"){
   
    switch (turnos){
        case "1":
            alert("Tienes el turno 1");
            break;
        case "2":
            alert ("Tienes el turno 2");
            break;
        case "3":
            alert ("Tienes el turno 3");
            break;
        case "4":
            alert ("Tienes el turno 4");
            break;
        case "5":
            alert("Tienes el turno 5");
            break;
        default:
            alert("No hay más turnos, vuelva el mes siguiente");
            break;
    }
    turnos = prompt ("Turnos disponibles del 1 al 5 de febrero, elija una fecha.")
}*/


// ---------------------CLASE 4- FUNCIONES--------------------------

/*function saludar (){
    alert ("Bienvenidos/as")
}

saludar();
saludar();*/



//---------------------ENTREGABLE 1-----------------------------------


/*let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

function producto(){
    let productoIngresado = prompt ("Ingresar producto") ;
    alert ("Producto: " + productoIngresado);
}

let total= 0
function precio(){
    let precioIngresado =  parseInt (prompt ("Ingresar precio"));
    alert ("Precio: " + precioIngresado)
    total += precioIngresado
}

producto();
precio();

let continuar = prompt ("¿Desea continuar comprando?")

if (continuar=="si"){
    producto();
    precio();
    alert("El total es: "+ total);
   
}else{
    alert("¡Gracias por visitarnos!");
}*/

//--------------------------------------------------------------------
/*class Producto {
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = parseInt(precio);
    }
}*/

// alert("Precio total de los productos: " + total)



/*let ingresarProductos = parseInt( prompt("Cantidad de productos a llevar") )
let total = 0
for (let p = 0; p < ingresarProductos ; p++) {
    const producto = new Producto ( prompt("Ingrese el nombre del producto"),prompt("Precio"))    
    total += producto.precio
}

alert("Precio total de los productos: " + total)*/


// -----------------CLASE 5-COMPLEMENTARIO ARRAYS----------------------



let nombreIngresado = prompt ("Ingrese su nombre")
function saludar (){
    alert ("Bienvenido/a a la tienda de Ossana " + nombreIngresado)    
}

saludar();

alert("Nuestros productos disponibles:")

let productos =
    [
        {
            id: 1, 
            tipo: "facial", 
            producto: "Agua micelar", 
            precio: 350
        },
        {
            id: 2, 
            tipo: "facial", 
            producto: "Tónico facial", 
            precio: 350
        },
        {
            id: 3, 
            tipo: "facial", 
            producto: "Agua de rosas", 
            precio: 375
        },
        {
            id: 4, 
            tipo: "corporal", 
            producto: "Crema corporal", 
            precio: 450
        },
        {
            id: 5, 
            tipo: "corporal", 
            producto: "Bruma corporal", 
            precio: 400
        }
    ]
    
    
    let render = '';
    productos.forEach(element => {
        render += `
                    ID: ${element.id}
                    TIPO: " + ${element.tipo}
                    PRODUCTO: "+ ${element.producto} 
                    PRECIO: " + ${element.precio}`;
    
    })
    alert(render)
    



    let carro = []


    function agregarProducto() {
        let elijo = parseInt(prompt('ingrese el ID del producto'))
        let agregar = productos.find((el) => el.id == elijo)
        console.log(agregar);
        carro.push(agregar)
    }

    agregarProducto();
    alert(carro[0].producto)
    console.log(carro);

    function actualizarCarrito() {
        console.log('Cantidad de productos agregados ' + carro.length)
        let suma = carro.reduce((acc, el) => acc + el.precio, 0)             
        console.log('La suma total de su carrito es $' + suma)

    }

    actualizarCarrito();



/*function producto(){
    let productoIngresado = prompt ("Ingresar nombre del producto") ;
    alert ("Producto: " + productoIngresado);
}

let total= 0
function precio(){
    let precioIngresado =  parseInt (prompt ("Ingresar precio"));
    alert ("Precio: " + precioIngresado)
    total += precioIngresado
}

producto();
precio();

let continuar = prompt ("¿Desea continuar comprando?")

if (continuar=="si"){
    producto();
    precio();
    alert("El total es: "+ total);
   
}else{
    alert("¡Gracias por visitarnos!");
}*/











