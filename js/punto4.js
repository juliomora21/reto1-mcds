function calcularPunto4(){
    const min = 1;
    const max = 12;
    
    const numeroMes = random(min, max)
    var cantidadDias = 0;
    // Meses con 31 dias
    cantidadDias = (
        numeroMes == 1 
        || numeroMes == 3 
        || numeroMes == 5
        || numeroMes == 7
        || numeroMes == 8
        || numeroMes == 10
        || numeroMes == 12
    ) ? 31 : cantidadDias ;

    // meses con 30 dias
    cantidadDias = ( 
        numeroMes == 4 || 
        numeroMes == 6 || 
        numeroMes == 9 || 
        numeroMes == 11
    ) ? 30 : cantidadDias;

    // meses con 29 dias
    cantidadDias = ( numeroMes == 2)? 29: cantidadDias;
    
    console.log("Datos Punto 4: Numero del mes " +numeroMes);
    console.log("Datos Punto 4: Cantidad de dias " + cantidadDias);
    
    const mensaje = "el mes " + numeroMes + " tiene " + cantidadDias + " dias";

    document.getElementById("elementoSalida").innerHTML = mensaje;

}
function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
} 