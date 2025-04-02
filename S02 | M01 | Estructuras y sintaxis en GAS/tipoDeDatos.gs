function tipoDeDatos(){
  let texto = "Hola Mundo";
  let numero = 42;
  let esValido = "true";
  let colores = ["Rojo", "Verde", "Azul"];
  let persona = { nombre: "Valery", edad:20};

  Logger.log(texto + ", " + numero + "," +esValido);
  Logger.log("Primer Color: " + colores [0]);
  Logger.log("Nombre" + persona.nombre);
}