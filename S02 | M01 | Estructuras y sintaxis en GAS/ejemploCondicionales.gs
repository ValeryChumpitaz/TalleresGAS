function verificarNumero(numero) {
  if (typeof numero !== "number") {
    return;
  }

  if (numero % 2 === 0) {
    Logger.log(numero + " es par.");
  } else {
    Logger.log(numero + " es impar.");
  }
}

// Llamadas de prueba
verificarNumero(7); // "8 es par."
verificarNumero(10); // "15 es impar."