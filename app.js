let numeroSecreto = 0;
let intentos = 0;
let listaNúmerosSorteados = [];
let númeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}

function verificarIntento(){
   let númeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
   
   if   (númeroDeUsuario ==numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    //EL USUARIO NO ACERTÓ.
    if  (númeroDeUsuario > numeroSecreto ) {
        asignarTextoElemento('p','El número secreto es menor');
    } else{
        asignarTextoElemento('p','El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
   }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function GenerarNúmeroSecreto() {
    let númeroGenerado =  Math.floor(Math.random()*númeroMaximo)+1;

    console.log(númeroGenerado);
    console.log(listaNúmerosSorteados);
    //SI YA SORTEAMOS TODOS LOS NÚMEROS
    if (listaNúmerosSorteados.length == númeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los número posibles');

    } else{

        //SI EL NÚMERO GENERADO ESTÁ INCLUIDO EN LA LISTA
        if (listaNúmerosSorteados.includes(númeroGenerado)){

        } else{
            listaNúmerosSorteados.push(númeroGenerado);
            return númeroGenerado;

        }  
    }        
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${númeroMaximo}`);
    numeroSecreto = GenerarNúmeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //LIMPIAR CAJA
    limpiarCaja();
    //INDICAR MENSAJE DE INTERVALO DE NÚMEROS
    //GENERAR EL NÚMERO ALEATORIO 
    //INICIALIZAR EL NÚMERO DE INTENTOS
     condicionesIniciales();
    //DESHABILITAR EL BOTÓN DE NUEVO JUEGO 
    document.querySelector('#reiniciar').setAttribute('disabled','true');
     
    
}

condicionesIniciales();