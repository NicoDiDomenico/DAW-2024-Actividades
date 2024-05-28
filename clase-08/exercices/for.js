/* 5. */
console.log("Ejercicio 5:");
/* a. */
var nombres = ["lionel", "emiliano", "lisandro", "enzo", "julian"];

for (var i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
console.log("")

/* a. */
for (var i = 0; i < nombres.length; i++) {
    var palabra = nombres[i].substring(0,1).toUpperCase() + nombres[i].substring(1);
    console.log(palabra);
}
console.log("")

/* c. */
var sentence = ""

for (var i = 0; i < nombres.length; i++) {
    sentence += nombres[i] + ", "
}
console.log(sentence);

/* d. */
var arregloVacio = []

for (var i = 0; i < 10; i++) {
    arregloVacio[i] = i    
}
console.log(arregloVacio)
console.log("")