function calcularPunto2(){
    const inicioMensaje = "El resultado de la resta es: ";
    const intermedioMensaje = " y el de la multiplicación es:";

    var numeroUno = 15;
    var numeroDos = 9;
    var resultadoResta = numeroUno - numeroDos;
    var resultadoMultip = numeroUno * numeroDos;

    console.log("Datos Punto 2: Numero Uno " + numeroUno);
    console.log("Datos Punto 2: Numero Dos " + numeroDos);
    document.getElementById("elementoSalida").innerHTML = 
        inicioMensaje + resultadoResta + intermedioMensaje + resultadoMultip;   
}