const calcularPromedio = () => {
    const inputNota1 = document.querySelector("#nota_1");
    const inputNota2 = document.querySelector("#nota_2");
    const inputNota3 = document.querySelector("#nota_3");
    const inputNota4 = document.querySelector("#nota_4");
    let container = document.querySelector(".resultado");
    // Limpia DIV resultado
    container.innerHTML = "";
  
    const numero1 = Number(inputNota1.value);
    const numero2 = Number(inputNota2.value);
    const numero3 = Number(inputNota3.value);
    const numero4 = Number(inputNota4.value);
    // Es es basicamente para limpiar el input
    inputNota1.value = "";
    inputNota2.value = "";
    inputNota3.value = "";
    inputNota4.value = "";
  
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3) || isNaN(numero4)) {
      alert("Ingrese un numero valido");
      // Recuerden que el return aparte de retonar un valor tambien terminar la ejecucuion
      // de la funcuion en este nos retornarmos pero si tenemos una alert
      // y luego un return sin nada para que en este caso solo se encargue de terminar la ejecucion
      return;
    }

    if (numero1 > 20) {
        alert("La nota 1 no puede ser mayor a 20");
        return;
    }
    if (numero2 > 20) {
        alert("La nota 2 no puede ser mayor a 20");
        return;
    }
    if (numero3 > 20) {
        alert("La nota 3 no puede ser mayor a 20");
        return;
    }
    if (numero4 > 20) {
        alert("La nota 4 no puede ser mayor a 20");
        return;
    }


    let promedio = (numero1 + numero2 + numero3 + numero4) / 4;

    container.innerHTML = "<p>El promedio es: " + promedio + "</p>"

}