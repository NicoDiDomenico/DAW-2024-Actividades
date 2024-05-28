/* 6. */
console.log("Ejercicio 6:");
/* a. */
function suma(n1, n2) {
  return n1 + n2;
}

var totalSuma = suma(10, 20);
console.log(totalSuma);
/* console.log(typeof(totalSuma)) */

/* b. */
function suma2(n1, n2) {
  if (typeof(n1) !== "number" && typeof(n2) !== "number") {
    return n1 + n2;
  } else {
    console.log("Los parametros tienen un formato incorrecto");
    return NaN;
  }
}
console.log(suma2(70, "Fruta"));

/* c */
function validateInteger(n1) {
  return Number.isInteger(n1); /* Si es entero devuelve True sino False */
}
console.log(validateInteger(n1));

/* d. */
function suma3(n1, n2) {
  if (typeof(n1) !== "number" || typeof(n2) !== "number") {
      console.log("Existen datos ingresados incorretamente!");
      return NaN;
  }
  if (!Number.isInteger(n1)) {
      console.log(n1 + " no es entero. Será redondeado.");
      n1 = Math.round(n1);
  }
  if (!Number.isInteger(n2)) {
      console.log(n2 + " no es entero. Será redondeado.");
      n2 = Math.round(n2);
  }
  console.log("Suma total: " + (n1 + n2));
  return n1 + n2;
}

suma3(8.90, "a");

/* e. */
function validateInteger(num) { /* podria usar el del ej c. */
  return Number.isInteger(num);
}

function suma3(n1, n2) {
  if (typeof(n1) !== "number" || typeof(n2) !== "number") {
      return console.log("Existen datos ingresados incorretamente!");
  }
  if (!validateInteger(n1)) {
    console.log(n1 + " no es entero. Será redondeado.");
      n1 = Math.round(n1);
  }
  if (!validateInteger(n2)) {
    console.log(n2 + " no es entero. Será redondeado.");
      n2 = Math.round(n2);
  }
  return console.log("Suma total: " + n1 + n2);
}
suma3(8.90, "a");
