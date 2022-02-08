class Tienda {
 /// propiedades Nombre de la tienda.
// Dirección de la tienda.
// Propietario de la tienda.
// Rubro de la tienda.
constructor(nombre, direccion, propietario, rubro){

        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    
    }
    /// metodos
    
    estaAbierto(hora){
        if ((hora >= 8) && (hora <= 12 ) || (hora >= 15) && (hora <=19)) {
            return alert(true)
        }else{
            return alert( false)
        }
    }
}

// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacen");
// const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel","Panaderia");
// const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns","Shopping");

// Solicitar al usuario el registro de cinco (5) tiendas.
// Emplear la clase Tienda de la actividad 1, para instanciar los objetos en función de las entradas capturadas. Generar una única salida compuesta por la información de los objetos instanciados.

// let acumulador = ""
// for (let index = 0; index < 2; index++) {
    
//     const tienda = new Tienda (prompt("ingrese nombre"),
//                                 prompt("ingrese direccion"),            
//                                 prompt("ingrese propietario"),
//                                 prompt("ingrese rubro"),)

//     document.write( acumulador += " Nombre:" + tienda.nombre + 
//                                     "direccion: " +  tienda.direccion  + 
//                                     "propietario :" +   tienda.propietario + 
//                                     "rubro :" +  tienda.rubro )                           
    
// }


// Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora). Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19. Caso contrario, se retorna false.
// Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas. Informar por alerta si la tienda está abierta, en función de la hora ingresada.

// const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu","Almacen");
// for (let i = 0; i < 3; i++) {
//     let entradaHora = parseInt(prompt("ingrese la hora"))
//     tienda1.estaAbierto(entradaHora)
// }

