/Calular el total de productos comprados/
let prod = parseInt(prompt(“Escriba el precio del producto”));
let prod1 = parseInt(prompt(“Escriba el precio del producto”));
function sumatoria() {
    return (prod + prod1);
}
let total = sumatoria()
alert(“El precio total es: ” + total);
/Iva del producto/
function precioIva(total) {
    return (total + (total * 0.21))
}
let iva = precioIva(total);
alert(“El precio con iva es: ” + iva);
/*Objetos
Para el formulario de contacto
*/
class Contacto {
    constructor(nombre, apellido, email, consulta) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.consulta = consulta;
    }
    formulario() {
        console.log(“Su nombre es ” + (this.nombre) + (this.apellido) + “, su email es ” + (this.email) + ” y esta es su consulta ” + (this.consulta));
    }
}
let contacto1 = new Contacto(“Tiffany”, “Beuses”, “tiffanybeuses@gmail.com”, “Quiero saber el precio de un producto”);
contacto1.formulario();
/Arrays/
let contacto = new Array (“Nombre”, “Apellido”, “Email”, “Consulta”)
console.log(contacto.join(“\n”));