const productosArray = [
    {
    id: "productosElectricos-01",
    titulo: "PRODUCTOS ELECTRICOS",
    imagen: "../asset/img/imgProducto1.jpeg",
    categoria:{
        nombre:"Productos Electricos",
        id: "productosElectricos"
    },
    precio: "1000"
},
{
    id: "productosMetalurgica-01",
    titulo: "TANQUES AEREOS",
    imagen: "../asset/img/imgProducto2.jpeg",
    categoria:{
        nombre:"Productos de Metalurgica",
        id: "productosMetalurgica"
    },
    precio: "1000"
},
{
    id: "productosMetalurgica-02",
    titulo: "CAJON DE HERRAMIENTAS",
    imagen: "../asset/img/imgProducto3.jpeg",
    categoria:{
        nombre:"Productos de Metalurgica",
        id: "productosMetalurgica"
    },
    precio: "1000"
}
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias= document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito= document.querySelector("#numerito")




function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = ""
    productosElegidos.forEach(producto =>{
        const div= document.createElement("div");
        div.classList.add("producto");
        div.innerHTML= `
        
        <img  class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h5 class="producto-titulo">${producto.titulo}</h5>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    })
    actualizarBotonesAgregar()
}

cargarProductos(productosArray);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(boton =>{boton.classList.remove("active")});
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
        const productoCategoria = productosArray.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText = productoCategoria.categoria.nombre;
        const productosBoton= productosArray.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
        }else{
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productosArray);
        }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    })
}

const productosEnCarrito = []

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productosArray.find(producto => producto.id === idBoton);
    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito()
    localStorage.setItem("productos-en-carrito", JSON)
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}