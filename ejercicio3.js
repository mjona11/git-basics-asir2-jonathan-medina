const scanner = require("prompt-sync")({ sigint: true });

let suma = 0;

while (true) {
    let input = scanner("Ingrese un número o escriba 'cancelar' para salir: ");
    if (input.toLowerCase() === "cancelar") {
        break;
    }
    let numero = parseFloat(input);

    if (!isNaN(numero)) {
       
        suma += numero;
    } else {
        console.log("(no entiendo)");
    }
}
console.log("La suma total es: " + suma);
