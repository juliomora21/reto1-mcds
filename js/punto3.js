function calcularPunto3(){

    const min = 0;
    const max = 10;
    var operacionMensaje = "El resultado de la ";
    const aleatorioMensaje = ", El valor del numero aleatorio es: ";

    var numeroUno = 15;
    var numeroDos = 9;
    var valorAleatorio = random(0, 10);
    var resultadoOperacion;

    console.log("Datos Punto 3: Numero Uno " + numeroUno);
    console.log("Datos Punto 3: Numero Dos " + numeroDos);
    console.log("Datos Punto 3: Numero aleatorio " + valorAleatorio);
    
    if (valorAleatorio < 5) {
        operacionMensaje += "resta es: ";
        resultadoOperacion = numeroUno - numeroDos;
    } else {
        operacionMensaje += "multiplicacion es: ";
        resultadoOperacion = numeroUno * numeroDos;
    }
    document.getElementById("elementoSalida").innerHTML = 
        operacionMensaje + resultadoOperacion + aleatorioMensaje + valorAleatorio;   
    
}

function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}