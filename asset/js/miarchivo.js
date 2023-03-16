let bienvenido = prompt("Bienvenido, ingrese su nombre: ");

if(bienvenido === ""){
    alert("Ingrese su nombre porfavor");
}else{
    alert("Bienvenido " + bienvenido);
}

let verPrecioProductos = prompt("Quieres ver los precios de nuestros productos?") 

while (verPrecioProductos != "no") {
    alert("PRODUCTOS ELECTRICOS:30000 \n TANQUES AEREOS:200000 \n CAJON DE HERRAMIENTAS: 60000");
    verPrecioProductos = prompt("Quieres seguir viendo nuestros precios? ")
}

let productos = prompt("Ingrese, si usted desea, dos productos o los 3 disponibles asi te indicamos el precio final. Te recordamos cuales son: \n PRODUCTOS ELECTRICOS \n TANQUES AEREOS \n CAJON DE HERRAMIENTAS" );


function sumaProducto1y2(){
    return 30000 + 200000;
}
function sumaProducto1y3(){
    return 30000 + 60000;
}
function sumaProducto2y3(){
    return 200000 + 60000;
}

if(productos === "productos electricos y tanques aereos"){
    alert (sumaProducto1y2())
}else if(productos === "productos electrico y cajon de herramientas"){
    alert (sumaProducto1y3())
}else if(productos === "tanques aereos y cajon de herramientas"){
    alert (sumaProducto2y3())
}else{
    alert("Gracias por visitar nuestra pagina, espero te haya gustado!")
}