// ejercicio 1
document.write("<br><br>*EJERCICIO N1 (muestra en un alert)<br>");
alert("Este es un mensaje de alerta");
// ejercicio 2
document.write("<br>*EJERCICIO N2<br>");
document.write("<br>Hello world<br>");
// ejercicio 3
document.write("<br>*EJERCICIO N3<br>");
document.write("<br>resultado: "+(3+5));
// ejercicio 4
document.write("<br><br>*EJERCICIO N4<br>");
let nombre = prompt("ingrese su nombre");
document.write("<br>hola<br>"+nombre);
// ejercicio 5
document.write("<br><br>*EJERCICIO N5<br>");
let num1 = parseInt(prompt("ingrese número")); 
let num2 = parseInt(prompt("ingrese otro número"));
document.write("<br>resultado: "+(num1+num2));
// ejercicio 6
document.write("<br><br>*EJERCICIO N6<br>");
let num3 = parseInt(prompt("ingrese número")); 
let num4 = parseInt(prompt("ingrese otro número"));
if(num3>num4){
    document.write("<br>el mayor es: "+(num3));
}else{
    document.write("<br>el mayor es: "+(num4));
}
// ejercicio 7
document.write("<br><br>*EJERCICIO N7<br>");
let num5 = parseInt(prompt("ingrese número")); 
let num6 = parseInt(prompt("ingrese otro número"));
let num7 = parseInt(prompt("ingrese otro número"));
if(num5>num6 && num5>=num7){
    document.write("<br>el mayor es: "+(num5));
}
if(num6>num5 && num6>=num7){
    document.write("<br>el mayor es: "+(num6));
}
if(num7>num5 && num7>=num6){
    document.write("<br>el mayor es: "+(num7));
}
// ejercicio 8
document.write("<br><br>*EJERCICIO N8<br>");
let num8 = parseInt(prompt ("ingresa un número:"));
if(num8%2===0){
    document.write("<br>"+num8+" es divisible por 2");
}else{
    document.write("<br>"+num8+" no es divisible por 2");
}
// ejercicio 9
document.write("<br><br>*EJERCICIO N9 (muestra en un alert)<br>");
const frase = prompt("ingresa una frase:");
let vocalesEncontradas = "";
for (let i = 0; i < frase.length; i++) {
  const caracter = frase.charAt(i).toLowerCase(); 

 
  if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
    if (!vocalesEncontradas.includes(caracter)) {
      vocalesEncontradas += caracter;
    }
  }
}
if (vocalesEncontradas.length > 0) {
    alert("Las vocales encontradas en la frase son: " + vocalesEncontradas);
  } else {
    alert("No se encontraron vocales en la frase.");
  }

// ejercicio 10
document.write("<br><br>*EJERCICIO N10 (muestra en un alert)<br>");
const numero = parseInt(prompt("ingresa un número:"));
let resultado = "";
if (numero % 2 === 0) {
  resultado = `El ${numero} es divisible por 2.`;
} else if (numero % 3 === 0) {
  resultado = `El ${numero} es divisible por 3.`;
} else if (numero % 5 === 0) {
  resultado = `El ${numero} es divisible por 5.`;
} else if (numero % 7 === 0) {
  resultado = `El ${numero} es divisible por 7.`;
} else {
  resultado = `El ${numero} no es divisible por 2, 3, 5 ni 7.`;
}
alert(resultado);
// ejercicio 11


