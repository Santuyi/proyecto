let bienvenido = prompt("Bienvenido, ingrese su nombre: ");

if(bienvenido === ""){
    alert("Ingrese su nombre porfavor");
}else{
    alert("Bienvenido " + bienvenido);
}

let verPrecioProductos = prompt("Quieres ver los precios de nuestros productos? \n 1 = Si \n 2 = No") 

while (verPrecioProductos != "2") {
    alert("PRODUCTOS ELECTRICOS:30000 \n TANQUES AEREOS:200000 \n CAJON DE HERRAMIENTAS: 60000");
    alert("Si usted quiere seguir viendo nuestros precios, escriba 1 para seguir chusmeando y 2 para pasar hacia la proxima etapa")
    verPrecioProductos = prompt("Quieres seguir viendo nuestros precios? ")    
}

alert("A continuacion te mostraremos la suma de nuestros productos")

function sumaProducto1y2(p1,p2){
    return p1 + p2;
}
function sumaProducto1y3(p1,p3){
    return p1 + p3;
}
function sumaProducto2y3(p2,p3){
    return p2 + p3;
}
function sumaProducto2y3(p1,p2,p3){
    return p2 + p3 + p1;
}

console.log("PRODUCTOS ELECTRICOS Y TANQUES AEREOS");
console.log(sumaProducto1y2(30000,200000));
console.log("PRODUCTOS ELECTRICOS Y CAJON DE HERRAMIENTAS");
console.log(sumaProducto1y3(30000,60000));
console.log("TANQUES AEREOS Y CAJON DE HERRAMIENTAS");
console.log(sumaProducto2y3(200000,60000));
console.log("PRODUCTOS ELECTRICOS, TANQUES AEREOS Y CAJON DE HERRAMIENTAS");
console.log(sumaProducto2y3(30000,200000, 60000));

alert("Esto no termina aca!! Tenemos algo nuevo para vos")

const pico = {
    nombre: "Pico de electrica",
    ancho: "2cm",
    precio: 20000,
}

const mascara = {
    nombre: "Mascara de electrica",
    utilidad: "Sirve para prevenir problemas en la vista",
    precio: 40000,
}

const torcha = {
    nombre: "Torcha de electrica",
    largo: "8cm",
    precio: 10000,
}

console.log(pico);
console.log(mascara);
console.log(torcha);

console.log("Aqui abajo te mostraremos los diferentes tipos de picos que tenemos en stock")

function Pico(marca, modelo, precio, stock){
    this.marca=marca;
    this.modelo=modelo;
    this.precio=parseFloat (precio);
    this.stock= parseFloat (stock);

    this.vender = (cantidad) => {
        if(cantidad <= this.stock){
            this.stock = this.stock - cantidad;
            return this.precio * cantidad;
        }else{
            return "Sin stock";
        }
    }; 

}
const pico1 = new Pico("dd", "dd", "25000", "20")
const pico2 = new Pico("dd", "dd", "20000", "30")
const pico3 = new Pico("dd", "dd", "30000", "25")
console.log(pico1);
console.log(pico2);
console.log(pico3);

function ventasPicos(){
    let ventaPico = prompt("Que pico va a llevar? \n 1=pico1 \n 2=pico2 \n 3=pico3 \n Indique porfavor un numero, gracias.")
    
    if(ventaPico == "1"){
        let ventaPico1 = pico1.vender(prompt("Cuantos picos va a llevar? Ingrese un numero porfavor (tenga en claro el stock disponible)."))
        console.log("El precio es " + ventaPico1); 
    }else if(ventaPico == "2"){
        let ventaPico2 = pico2.vender(prompt("Cuantos picos va a llevar? Ingrese un numero porfavor (tenga en claro el stock disponible)."))
        console.log("El precio es " + ventaPico2); 
    }else if (ventaPico == "3"){
        let ventaPico3 = pico3.vender(prompt("Cuantos picos va a llevar? Ingrese un numero porfavor (tenga en claro el stock disponible)."))
        console.log("El precio es " + ventaPico3); 
    }else{
        alert("Gracias")
    }
    }

let comprarPico = prompt("Quieres comprar picos? \n 1=SI \n 2=NO")

if(comprarPico == "1"){
    ventasPicos()
}else{
    alert("Gracias")
}

alert("Jajaja en serio pensabas que esto termina aca? Pero claro que no, mira lo nuevo que tenemos para vos");


const productos = [
    { nombre: "Alambrera", precio: 300000},
    { nombre: "Electrodos", precio: 250000},
    { nombre: "Alambre", precio: 50000},
    { nombre: "Alargue", precio: 25000},
]; 

productos.forEach(
    (producto)=>{
        console.log(producto);
    }
)


let ingresaDinero = prompt("Cuanto dinero tiene para gastar? escribe un numero porfavor");
const barato = productos.filter((el) => el.precio <= ingresaDinero)
console.log(barato);

const carrito = []

let ingresaProducto = prompt("Ingrese que producto quiere llevar y sera agregado al carrito (porfavor ingrese el nombre del producto bien, con mayuscula al principio) \n Cuando termines de agregar los productos al carrito, pone listo.");
while (productos.some( (el)=>{return el.nombre === ingresaProducto;} )) {
    const encontrado = productos.find((el)=>{
        return el.nombre === ingresaProducto;
    })
    carrito.push(encontrado);
    console.log(carrito); 
    ingresaProducto = prompt("Ingrese que producto (ingresa bien el nombre) quiere llevar y sera agregado al carrito. \n Cuando termines de agregar los productos al carrito, pone listo.");
}