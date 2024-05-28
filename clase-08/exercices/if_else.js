/* 4. */
console.log("Ejercicio 4:");
/* a. */
var numeroAleatorioEntre0Y1 = Math.random();

if (numeroAleatorioEntre0Y1 > 0.5) {
    console.log('Greater than 0,5');
} else {
    console.log('Lower than 0,5');
}

/* b. */
var numeroAleatorioEntre1y100 = Math.floor(Math.random() * 100) + 1;
edad = numeroAleatorioEntre1y100;

if (edad < 2) {
    console.log("Bebe");
} else if (edad >= 2 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 19) {
    console.log("Adolescente");
} else if (edad >= 20 && edad <= 30) {
    console.log("Joven");
} else if (edad >= 31 && edad <= 60) {
    console.log("Adulto");
} else if (edad >= 61 && edad <= 75) {
    console.log("Adulto mayor");
} else if (edad > 75) {
    console.log("Anciano");
}
console.log("");