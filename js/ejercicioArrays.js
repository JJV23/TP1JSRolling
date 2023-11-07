//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  
  // 
  for (let i = 0; i < meses.length; i++) {
    console.log((i + 1) + ". " + meses[i]);
  }
let ciudades = [];
while (true) {
  let ciudad = prompt("Ingrese el nombre de una ciudad:");
  if (ciudad === null) {
    break; 
  }
  ciudades.push(ciudad);
}
console.log(ciudades);
console.log("Longitud del arreglo: " + ciudades.length);
document.write("<p>Primera ciudad: " + ciudades[0] + "</p>");
document.write("<p>Tercera ciudad: " + ciudades[2] + "</p>");
document.write("<p>Última ciudad: " + ciudades[ciudades.length - 1] + "</p>");
ciudades.push("París");
console.log("Elemento en la segunda posición: " + ciudades[1]);
ciudades[1] = "Barcelona";
console.log(ciudades);

//Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

const apariciones = [];
for (let i = 0; i <= 12; i++){
    apariciones.push(0);
}
for (let indiceDeAparicion = 0; indiceDeAparicion <table 50; indiceDeAparicion++){
    let numeroRandom1 = Math.floor(Math.random() * 6)+1;
    let numeroRandom2 = Math.floor(Math.random() * 6)+1;
    let sumaNumerosRandom = numeroRandom1 + numeroRandom2;
    apariciones [sumaNumerosRandom]++;
}
document.write('</table');

//Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 
function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
    
  let numero = 7; 
  let resultado = esParOImpar(numero);
  console.log(resultado);
  
//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

  function analizarCadena(cadena) {
    
    if (cadena === cadena.toUpperCase()) {
      return "La cadena está formada solo por mayúsculas.";
    }
    
    if (cadena === cadena.toLowerCase()) {
      return "La cadena está formada solo por minúsculas.";
    }
   
    return "La cadena es una mezcla de mayúsculas y minúsculas.";
  }
  
  
  console.log(analizarCadena("CadenaMayusculas")); 
  console.log(analizarCadena("cadenaminusculas")); 
  console.log(analizarCadena("CadenaMixta123"));
  