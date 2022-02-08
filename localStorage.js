const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

window.addEventListener("load", () => {
  let contenedorProductos = document.querySelector("#contenedorProducts")
  productos.map( item => {
    contenedorProductos.innerHTML += `
                                  <div class="card" style="width: 18rem;">
                                  <img src="${item.imagen}" class="card-img-top" alt="...">
                                  <div class="card-body">
                                    <h5 class="card-title">${item.producto}</h5>
                                    <p class="card-text">${item.precio}</p>
                                    <a href="#" class="btn btn-primary" id="${item.id}">Go somewhere</a>
                                  </div>
                                </div>
    
                                  `
  })

  btnAdd()
})

const carrito = []

const btnAdd = () => {
  let boton = document.querySelectorAll(".btn")
  for (const iterator of boton) {
    iterator.addEventListener("click", () => {
      let validar = productos.find( el => el.id == iterator.id)
      console.log(validar);
      carrito.push(validar)
      console.log(carrito);
      localStorage.setItem("arrayCarrito", JSON.stringify(carrito))
    })
  }
  console.log(boton);
}


let botonConsultaLocal = document.querySelector("#consultarLocal")
botonConsultaLocal.addEventListener("click", () => {
  
  let contenedor = document.querySelector("#carrito")
  let resultado = JSON.parse( localStorage.getItem("arrayCarrito") )
  console.log(resultado);
  resultado.map( item => {

    contenedor.innerHTML += ` <h2> ${item.producto}</h2>
                                <h3> ${item.precio}</h3>


                        `
  })

})