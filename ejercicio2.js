
const scanner =require("prompt-sync")({sigint: true});
var nota = (scanner("Ingrese su nota:"));


if (nota < 3) {
    console.log("Calificación: Suspenso");
} else if (nota <= 4.9) {
    console.log("Calificación: Suspenso");
} else if (nota <= 6) {
    console.log("Calificación: Aprobado");
} else if (nota <= 7) {
    console.log("Calificación: Bien");
} else if (nota <= 9) {
    console.log("Calificación: Notable");
} else if (nota <= 10) {
    console.log("Calificación: Sobresaliente");
} else {
    console.log("La nota ingresada no es valida , ingresa entre 0 y 10.");
}
