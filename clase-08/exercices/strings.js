/* 2. */
console.log("Ejercicio 2:");
/* a. .toUpperCase() convierte la variable en mayuscula */
var palabra = 'Muchisimos Caracteres';

palabraMayus = palabra.toUpperCase();
console.log(palabraMayus);

/* b. .substring(0, 5) corto el string de 0 al 5 (sin incluir) */
var palabra5caracteres = palabra.substring(0, 5);
console.log(palabra5caracteres);

/* c. */
var palabraUltimos3Caracteres = palabra.substring(palabra.length - 3, palabra.length);
console.log(palabraUltimos3Caracteres);

/* d. */
var palabra1raMayusRestoMinus = palabra.substring(0, 1).toUpperCase() + palabra.substring(1, palabra.length).toLowerCase();
console.log(palabra1raMayusRestoMinus);

/* e. */
var espacioEnBlanco = palabra.indexOf(' ');
console.log("Posicion: " + espacioEnBlanco);

/* f. */
var primeraPalabra = palabra.substring(0, espacioEnBlanco);
var segundaPalabra = palabra.substring(espacioEnBlanco+1); /* Acá me di cuenta que si no pongo el segundo parametro va hasta el final */

var primeraPalabraEnMayus = primeraPalabra.substring(0,1).toUpperCase() + primeraPalabra.slice(1).toLowerCase();
var segundaPalabraEnMayus = segundaPalabra.substring(0,1).toUpperCase() + segundaPalabra.slice(1).toLowerCase();

var palabraCompleta = primeraPalabraEnMayus + ' ' + segundaPalabraEnMayus;
console.log(palabraCompleta);
console.log(" ");