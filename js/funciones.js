//funciones declarativas, siempre va con parentesis y corchetes
function saludar(){
    document.write('<p>Hola mundo');
} 

function nuevoSaludo(nombreIngresado, apellidoIngresado){
    document.write(`<p> Hola ${nombreIngresado}, ${apellidoIngresado} que tengas un buen día </p>`);
} 

//invocar a una funcion 
saludar();//funcion sin parametros

const nombre = prompt('Ingrese un nombre');
const apellido = prompt('Ingrese un apellido');

nuevoSaludo(nombre, apellido);

nuevoSaludo('Luciano', 'Cabello')

nuevoSaludo('Sebastian');

nuevoSaludo();