//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
const edad = prompt("Ingrese su edad:");

if (isNaN(edad)) {
  console.log("La edad ingresada no es un número válido.");
} else if (parseInt(edad) >= 18) {
  console.log("¡Ya puede conducir!");
} else {
  console.log("Usted es menor de edad para conducir.");
}
//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

const nota = prompt("Ingrese su nota (número del 0 al 10):");

if (!isNaN(nota) && nota >= 0 && nota <= 10) {
  notaNum = parseFloat(nota);

  let calificacion;

  if (notaNum >= 0 && notaNum <= 2) {
    calificacion = "Muy deficiente";
  } else if (notaNum >= 3 && notaNum <= 4) {
    calificacion = "Insuficiente";
  } else if (notaNum >= 5 && notaNum <= 6) {
    calificacion = "Suficiente";
  } else if (notaNum === 7) {
    calificacion = "Bien";
  } else if (notaNum >= 8 && notaNum <= 9) {
    calificacion = "Notable";
  } else {
    calificacion = "Sobresaliente";
  }

  alert(`Su calificación es: ${calificacion}`);
} else if (isNaN(nota)) {
  alert("Introduce un número válido.");
} else {
  alert("Número erróneo");
}

//3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

let todasLasCadenas = '';

while (true) {
  const cadena = prompt("Ingrese una cadena de texto (o haga clic en 'Cancelar' para finalizar):");

  if (cadena === null) {
    break; // El usuario pulsó "cancelar," salimos del bucle.
  }

  todasLasCadenas += cadena + '-';
}

if (todasLasCadenas !== '') {
  // Eliminamos el último guión sobrante.
  todasLasCadenas = todasLasCadenas.slice(0, -1);
  alert("Cadenas concatenadas: " + todasLasCadenas);
} else {
  alert("No se ingresaron cadenas.");
}

//4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

while (true) {
  const input = prompt("Ingrese un número (o haga clic en 'Cancelar' para finalizar):");

  if (input === null) {
    break; // El usuario pulsó "cancelar," salimos del bucle.
  }

  const numero = parseFloat(input);

  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
  } else {
    suma += numero;
  }
}

alert("La suma total de los números introducidos es: " + suma);

//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

for (let i = 1; i <= 30; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    console.log(linea);
  }

  //7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

  const numeroMaximo = prompt("Ingrese un número (no mayor de 50) para construir la pirámide inversa:");

if (!isNaN(numeroMaximo) && numeroMaximo <= 50 && numeroMaximo >= 1) {
  for (let i = numeroMaximo; i >= 1; i--) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
      linea += i;
    }
    console.log(linea);
  }
} else {
  alert("Por favor, ingrese un número válido entre 1 y 50.");
}
