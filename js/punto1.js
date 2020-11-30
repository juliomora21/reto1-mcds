function calcularPunto1() {
    const inicioMensaje = "El resultado de la resta es: ";

    var numeroUno = 578;
    var numeroDos = 42;
    var resultadoResta = numeroUno - numeroDos;
    
    console.log("Datos Punto 1: numero Uno " + numeroUno + " - Numero Dos " + numeroDos);
    document.getElementById("elementoSalida").innerHTML = inicioMensaje + resultadoResta;
}