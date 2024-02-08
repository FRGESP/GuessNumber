
let numeroUsuario ;
let numeroSecreto;
let minimo;
let maximo;
//let numeroSecreto = Math.floor(Math.random()*10)+1; 
let intentos = 0;
//let palabraIntento = "intento"

// alert("Hello World");

minimo = parseInt(prompt("Ingrese el valor minimo en el que quiere jugar"));
maximo = parseInt(prompt("Ingrese el numero maximo con el que desea jugar"));

numeroSecreto = Math.floor(Math.random()* (maximo-minimo)) + minimo;
console.log(numeroSecreto);

while(numeroUsuario!=numeroSecreto)
{
    
    intentos++;
    if(intentos>3)
    {
        alert(`Has alcanzado el numero de intentos maximo el numero secreto era: ${numeroSecreto}`);
        break;
    }

    numeroUsuario = parseInt(prompt("Ingrese un numero: "));
    console.log(numeroUsuario);
    if(numeroUsuario == 999)
    {
        break;
    }

    if(numeroUsuario==numeroSecreto)
    {
        alert(`Has encontrado el numero secreto que es: ${numeroSecreto} en ${intentos} ${intentos > 1 ? "intentos" : "intento"}`);
    }
    else
    {
        alert(`El numero secreto es ${numeroUsuario>numeroSecreto ? "menor" : "mayor"}`)
    }
}




// let nombre = "Luna";
// let edad = 25;
// let numeroDeVentas = 50;
// let saldoDisponible = 1000;
// let mensajeDeError = "¡Error! Completa todos los campos";


// alert("¡Bienvenida y bievenido a nuestro sitio web!");
// alert("¡Error! Completa todos los campos");
// alert(mensajeDeError);

// nombre = prompt("Ingrese su nombre");
// edad = prompt("Ingrese su edad");

// if(edad >= 18)
// {
//     alert("¡Puedes obtener tu licencia de conducir!")
// }



// let diaUsuario = prompt("Ingrese el dia de la semana que es");

// if(diaUsuario == "Sabado" || diaUsuario == "Domingo")
// {
//     alert("Buen fin de semana");
// }
// else
// {
//     alert("Buena semana");
// }

// let numero = prompt("Ingrese un numero");

// if(numero < 0)
// {
//     alert("El numero es negativo");
// }
// else
// {
//     alert("El numero es positivo");
// }

// let puntuacion = prompt("Ingrese su puntuacion");

// if(puntuacion>100)
// {
//     alert("¡Ganaste!");
// }
// else
// {
//     alert("¡Perdiste!");
// }

// alert(`El saldo de su cuenta es: ${saldoDisponible}`);

// nombre = prompt("Ingrese su nombre");

// alert(`Bienvenido ${nombre}`);
