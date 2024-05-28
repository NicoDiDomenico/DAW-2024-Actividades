/* 2. */
console.log("Ejercicio 3:");
/* a. */
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Mes 5: " + meses[4]);
console.log("Mes 11: " + meses[10]);

/* b. */
console.log(meses.sort());

/* c. */
meses.unshift("unshift") /* Agrego un elemento al inicio */
meses.push("push"); /* Agrego uno o mas elementos al final */
console.log(meses);

/* d. */
meses.pop(); /* Elimino el ultimo elemento */
meses.shift(); /* Elimino el primer elemento */
console.log(meses);

/* e. */
meses.reverse(); /* invierte el orden */
console.log(meses);

/* f. */
var mesesUnidos = meses.join('-');
console.log("Meses: " + mesesUnidos);

/* g. */
var mesesMayoANoviembre = meses2.slice(4,11); /* usé meses2 porque meses está desordenado */
console.log(mesesMayoANoviembre);
console.log("");