const scanner =require("prompt-sync")({sigint: true});

var nombre = scanner("Ingrese tu nombre:");

var edad = (scanner("Ingrese tu edad:"));

if (edad >= 18) {
    console.log(nombre + ", ya puedes conducir");
} else {
    console.log(nombre + ", aún no puedes conducir debes tener 18 años.");
}
