//funciones declarativas, siempre va con parentesis y corchetes
function saludar(){
    document.write('<p>Hola mundo');
} 
//funciones que le pongo un valor
function nuevoSaludo(nombreIngresado, apellidoIngresado){
    document.write(`<p> Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen día </p>`);
} 

//funciones que retoman un valor
//function conversionAPesos(dolares){
//    const precioFinal = dolares *1000;
//    console.log(precioFinal);
//    return precioFinal; // el return es la ultima linea de codigo, lo que viene despues no lo lee
//}
//arrow functions
//const conversionAPesos = (dolares) =>{
//    const precioFinal = dolares *1000;
//    console.log(precioFinal);
//    return precioFinal;
//}

const conversionAPesos = (dolares) =>dolares *1000;//se puede realizar la operacion en una sola linea y si es una sola linea de codigo 

//invocar a una funcion 
saludar();//funcion sin parametros

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

nuevoSaludo(nombre, apellido);

nuevoSaludo('Luciano', 'Cabello')

nuevoSaludo('Sebastian');

nuevoSaludo();

let precioProducto = conversionAPesos(35);
document.write(`<p>El precio dle producto de prueba es: $${precioProducto}</p>`);
document.write(`<p>El precio dle producto de prueba es: $${conversionAPesos(40)}</p>`);