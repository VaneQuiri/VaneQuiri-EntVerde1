//Declaracion de Variables
const hel = 0.5;
const lav = 0.8;
const tel = 0.4;
const ven = 0.2;
const spl = 1;

let horas = 0;
let consumo = 0;
let consu = 0;
let cont = 0;


//Funcion de verificacion de valor ingresado en horas
function verifHoras(horas){
    if (isNaN(horas)){
        alert("Ingresá un número válido");
        return false;
    }
    else if ((horas) < 1 || (horas) > 24){
        alert("Ingresá un número entre 1 y 24");
        return false;
    }
    return true;
}

//Interaccion con el Usuario
let elect = parseInt(prompt ("Selecciones un electrodoméstico:\n\n1 - Heladera\n2 - Lavarropa\n3 - Televisor\n4 - Ventilador\n5 - Split\n\n0 - SALIR"));

//Bucle de Ingreso de datos
while (elect != 0){
        switch (elect){
            case 1:
                horas = parseInt(prompt("Ingrese las horas de uso durante 24hs"));
                if (verifHoras(horas)){
                    consumo = horas * hel;
                    break;
                }

            case 2:
                horas = parseInt(prompt("Ingrese las horas de uso durante 24hs"));
                if (verifHoras(horas)){
                    consumo = horas * lav;
                    break;
                }

            case 3:
                horas = parseInt(prompt("Ingrese las horas de uso durante 24hs"));
                if (verifHoras(horas)){
                    consumo = horas * tel;
                    break;
                }

            case 4:
                horas = parseInt(prompt("Ingrese las horas de uso durante 24hs"));
                if (verifHoras(horas)){
                    consumo = horas * ven;
                    break;
                }

            case 5:
                horas = parseInt(prompt("Ingrese las horas de uso durante 24hs"));
                if (verifHoras(horas)){
                    consumo = horas * spl;
                    break;
                }

            default:
                alert ("No has ingresado una opcion correcta");
                break;
        }        
        if (elect <= 5){
            cont ++;
            consu = parseInt(consu + consumo);
            elect = parseInt(prompt ("Seleccione un electrodoméstico de la lista:\n\n1 - Heladera\n2 - Lavarropa\n3 - Televisor\n4 - Ventilador\n5 - Split\n\n0 - SALIR"));
        }
        else {
            elect = parseInt(prompt ("Seleccione un electrodoméstico válido\n\n1 - Heladera\n2 - Lavarropa\n3 - Televisor\n4 - Ventilador\n5 - Split\n\n0 - SALIR"));
        }
}

//Calculo final y muestra de resultados
let consuMes = consu * 30;
alert (`Resumen estimativo de consumo:\n\nCantidad de electrodomésticos: ${cont} \nCantidad de kw consumidos en 24hs: ${consu}kw \nCantidad de kw consumidos en 30 días: ${consuMes}kw.`);
