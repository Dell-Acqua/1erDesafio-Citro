let ingreso = prompt("¿Quiere jugar a la loteria? \nIngrese SI o NO").toUpperCase();
let numeroGanador = 23;



if (ingreso == "SI") {

    let numeroLoteria = parseInt(prompt("Ingrese un numero del 1 al 99"),0);

    while (numeroLoteria != numeroGanador && ingreso == "SI") {

        ingreso = prompt("UPS No hubo suerte :(, quiere volver a intentarlo? \nIngrese SI o NO").toUpperCase();

        if (ingreso == "SI") {
        numeroLoteria = parseInt(prompt("Ingrese un nuevo numero del 1 al 99"),0);
        }
        else {
            break;
        }
    }
    if (numeroLoteria == numeroGanador) {
        alert("Felicitaciones! El numero ganador era " +numeroGanador);
    }
}
alert ("Adios!");