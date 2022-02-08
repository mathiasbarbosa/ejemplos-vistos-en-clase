class Producto {
    
    
    constructor(nombre,precio,cantidad){
        this.nombre = nombre;
        this.precio = parseInt(precio);
        this.cantidad = cantidad 
    }

    
    addCantidad (n) {
        return this.cantidad += n
    }
}

const productos=[]
let subTotal = 0

function comprar(producto) {
    alert("Seleccionaste "+ producto.nombre + " " + "+ $" +producto.precio)
    subTotal += producto.precio * producto.cantidad
    
}

function unidades(producto) {
    let duplicado = productos.findIndex(elemento => elemento.nombre == producto.nombre)
    console.log(duplicado);
    if (duplicado >= 0 ) {
        productos[duplicado].cantidad += 1
    }else{
        productos.push(producto)
    }
    
        console.log(productos);
}


const producto1 = new Producto("arroz" , 100,1 )
const producto2 = new Producto("harina", 80,1)
const producto3 = new Producto("helado", 200,1)
const producto4 = new Producto("salsa", 90,1)
const producto5 = new Producto("jugo", 120,1)


alert("Bienvenido, a continuacion le mostraremos la lista de productos")
alert("1. Arroz  ($100)  2.Harina  ($80)  3.Helado  ($200)  4.Salsa  ($90)  5.Jugo  ($120)")



let total = 0


let codigoProducto = parseInt(prompt("Elija los productos por su codigo numerico, luego para finalizar ingrese 6"))
                                    
    while (codigoProducto != 6) {


        switch (codigoProducto) {
            case 1:
                comprar(producto1)
                unidades(producto1)

                break;

            case 2:
                comprar(producto2)
                unidades(producto2)
                break;

            case 3:
                comprar(producto3)
                unidades(producto3)
                break;

            case 4:
                comprar(producto4)
                unidades(producto4)

                break;

            case 5:
                comprar(producto5)
                unidades(producto5)
                break;


            default:
                alert("Producto no encontrado o codigo incorrecto")
                break;
        }
        alert("1. Arroz  ($100)  2.Harina  ($80)  3.Helado  ($200)  4.Salsa  ($90)  5.Jugo  ($120)")   
                                                                
        codigoProducto = parseInt(prompt("Elija los productos por su codigo numerico, luego para finalizar ingrese 6"))
    }
    

    
    total = productos.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )
    console.log(total);
    alert("el total es: " +"$"+ total + ". "+"Gracias por su compra" )


// for(const producto of  productos){
//     console.log(producto.nombre)
// }