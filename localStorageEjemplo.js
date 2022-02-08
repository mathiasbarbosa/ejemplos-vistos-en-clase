const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

window.addEventListener("load", () => {

  let contenedorProductos = document.querySelector("#contenedorProducts")
  console.log(contenedorProductos);
  productos.map( item => {
    contenedorProductos.innerHTML += ` <div class="card" style="width: 18rem;">
                                        <div class="card-body">
                                          <h5 class="card-title">${item.producto}</h5>
                                          <p class="card-text">${item.precio}</p>
                                          <a href="#" class="btn btn-primary" id="${item.id}">Go somewhere</a>
                                        </div>
                                      </div>
                                      `
  })
  addTocart()
})

const carrito = []

const addTocart = () => {
  
  let btnAdd = document.querySelectorAll(".btn")
  for (const iterator of btnAdd) {
    console.log(iterator.id);
    iterator.addEventListener("click", () => {
      let verificar = productos.find( item => item.id == iterator.id)
      carrito.push(verificar)
      localStorage.setItem("arrayCarrito", JSON.stringify(carrito))
      console.log(verificar);
      console.log(carrito); 
    })
  }

} 



  let boton = document.querySelector("#consultarLocal")
  boton.addEventListener("click", () => {
  
  let carritoLocal = JSON.parse( localStorage.getItem("arrayCarrito") )
  console.log(carritoLocal);
   let carritoContenedor = document.querySelector("#carrito")
  for (const iterator of carritoLocal) {
    carritoContenedor.innerHTML += `
                                      <h2>${iterator.producto}</h2>
                                      <h3>${iterator.precio}</h3>
                                      `
  }
  })

