//EJERCICIO REPOSITORIO DE OBRAS DIGITALES //

document
  .getElementById("form-repositorio")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. Declarar el repositorio y recolectar datos
    let repositorioObras = [];

    for (let i = 1; i <= 3; i++) {
      let obra = {
        id: i,
        nombre:
          document.getElementById(`nombre-obra-${i}`).value || `Obra ${i}`,
        duracionMinutos:
          parseFloat(document.getElementById(`duracion-obra-${i}`).value) || 0,
        pesoMB:
          parseFloat(document.getElementById(`peso-obra-${i}`).value) || 0,
      };
      repositorioObras.push(obra);
    }

    // Variables para cálculos
    let acumuladorDuracion = 0;
    let acumuladorPesoTotal = 0;
    let obraMasLarga = repositorioObras[0];

    for (let i = 0; i < repositorioObras.length; i++) {
      acumuladorDuracion += repositorioObras[i].duracionMinutos;
      acumuladorPesoTotal += repositorioObras[i].pesoMB;

      // Obra de mayor duración
      if (repositorioObras[i].duracionMinutos > obraMasLarga.duracionMinutos) {
        obraMasLarga = repositorioObras[i];
      }
    }

    // Calcula duracion total y promedio
    let duracionTotal = acumuladorDuracion;
    let duracionPromedio = acumuladorDuracion / repositorioObras.length;

    // Tiempo de transferencia (50 Mbps = 6.25 MB/s)
    let velocidadMBps = 6.25;
    let tiempoSegundos = obraMasLarga.pesoMB / velocidadMBps;
    let tiempoTransferenciaTexto = "";

    if (tiempoSegundos < 60) {
      tiempoTransferenciaTexto = `${tiempoSegundos.toFixed(1)} segundos`;
    } else {
      tiempoTransferenciaTexto = `${(tiempoSegundos / 60).toFixed(1)} minutos`;
    }

    // Presupuesto anual estimado ($0.05 USD por MB al año)
    let costoPorMBAnual = 0.05;
    let presupuestoAnual = acumuladorPesoTotal * costoPorMBAnual;

    // Inyectar los resultados en el HTML
    document.getElementById("res-total").innerText = `${duracionTotal} min`;
    document.getElementById(
      "res-promedio"
    ).innerText = `${duracionPromedio.toFixed(1)} min`;
    document.getElementById(
      "res-mayor"
    ).innerText = `${obraMasLarga.nombre} (${obraMasLarga.duracionMinutos} min)`;
    document.getElementById("res-transferencia").innerText =
      tiempoTransferenciaTexto;
    document.getElementById(
      "res-presupuesto"
    ).innerText = `$${presupuestoAnual.toFixed(2)} USD`;

    document.getElementById("btn-reiniciar").disabled = false;

    // Muestra tabla de datos en la consola
    console.log("--- Repositorio de Obras de Laurie Anderson Actualizado ---");
    console.table(repositorioObras);
  });

document.getElementById("btn-reiniciar").addEventListener("click", function () {
  document.getElementById("form-repositorio").reset();

  document.getElementById("res-total").innerText = "--";
  document.getElementById("res-promedio").innerText = "--";
  document.getElementById("res-mayor").innerText = "--";
  document.getElementById("res-transferencia").innerText = "--";
  document.getElementById("res-presupuesto").innerText = "--";

  this.disabled = true;
});
