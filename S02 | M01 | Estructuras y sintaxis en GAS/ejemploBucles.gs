function  filtrarNombre(){
  let nombres = ["Ana" , "Carlos", "Valery", "Jesus", "Luis", "Fernando", "Cinthia", "Arc","ABC"];
  nombres.forEach(function (nombre){
    if(nombre.length > 1 ) {
      Logger.log("Nombre corto: " + nombre);
    }
  });
}