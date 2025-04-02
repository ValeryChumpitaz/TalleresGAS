function ejemploOperadores() {
  var a = 10, b = 5;

  //Operadores Aritmeticos
  Logger.log("Suma" + (a + b));
  Logger.log("Resta" + (a - b));
  Logger.log("Multiplicacion" + (a * b));
  Logger.log("División: " + (a / b));
  Logger.log("Modulo: " + (a % b));

  // Operadores de Comparación
  Logger.log("¿a es igual a b? " + (a == b));
  Logger.log("¿a es mayor que b? " + (a > b))

  // Operadores Lógicos
  Logger.log("¿a es par y mayor que b? " + (a % 2 == 0 && a > b));
}