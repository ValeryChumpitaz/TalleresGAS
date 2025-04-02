function generarReporteEstudiantes() {
  // Definir la lista de estudiantes con nombres y notas
  const estudiantes = [
    { nombre: "Carlos Pérez", nota: 15 },
    { nombre: "Ana Gómez", nota: 12 },
    { nombre: "Luis Torres", nota: 18 },
    { nombre: "María Ríos", nota: 9 },
    { nombre: "Javier Mendoza", nota: 14 }
  ];
  
  // Filtrar aprobados (nota ≥ 13) y desaprobados (nota < 13)
  const aprobados = estudiantes.filter(est => est.nota >= 13);
  const desaprobados = estudiantes.filter(est => est.nota < 13);

  // Imprimir los estudiantes aprobados
  Logger.log("✅ Lista de Estudiantes Aprobados:");
  aprobados.forEach(est => {
    Logger.log(`✔️ ${est.nombre} - Nota: ${est.nota}`);
  });

  // Imprimir los estudiantes desaprobados
  Logger.log("❌ Lista de Estudiantes Desaprobados:");
  desaprobados.forEach(est => {
    Logger.log(`❗ ${est.nombre} - Nota: ${est.nota}`);
  });
}
