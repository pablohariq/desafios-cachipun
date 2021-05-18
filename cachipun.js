// recibir input de usuario
const escoger_jugada_cpu = () => {
    // genera un número entero aleatorio entre 0 y 2, puede que la distribucion no sea uniforme
    let opcion = Math.floor(Math.random()*3);
    if (opcion == 0){
        return "piedra"
    }
    else if (opcion == 1){
        return "papel"
    }
    else{
        return "tijera"
    }
}

// debug escoger_jugada_cpu() 

// input del usuario
const num_juegos_usuario = +prompt("Cuántas veces deseas jugar?");

// ciclo de juego
let num_juegos = 0;
let puntaje_cpu = puntaje_usuario = 0;
do{
    num_juegos++
    console.log(`*RONDA ${num_juegos}*`)
    let jugada_cpu = escoger_jugada_cpu();
    let jugada_usuario = prompt(`Ronda ${num_juegos}: Escoge tu jugada (piedra, papel o tijera)`); //mas adelante cambiaremos esto por una variable escogida via lista desplegable en una interfaz grafica html
    // entregar las jugadas de ambas partes
    console.log(`Tu jugada: ${jugada_usuario}`);
    console.log(`Jugada de la máquina: ${jugada_cpu}`);
    if (jugada_cpu == jugada_usuario){
        console.log(`Ronda ${num_juegos}: ¡Es un empate!`);
        continue
    } 
    else{
        if(jugada_usuario == "piedra"){
            if (jugada_cpu =="papel"){
                console.log(`Ronda ${num_juegos}: Perdiste contra la máquina`);
                puntaje_cpu++;
                continue
            }
            else if (jugada_cpu == "tijera"){
                console.log(`Ronda ${num_juegos}: Felicidades! le ganaste a la máquina`);
                puntaje_usuario++;
                continue
            }
        }
        else if(jugada_usuario == "papel"){
            if (jugada_cpu =="tijera"){
                console.log(`Ronda ${num_juegos}: Perdiste contra la máquina`);
                puntaje_cpu++;
                continue
            }
            else if (jugada_cpu == "piedra"){
                console.log(`Ronda ${num_juegos}: Felicidades! le ganaste a la máquina`);
                puntaje_usuario++;
                continue
            }
        }
        else if(jugada_usuario == "tijera"){
            if (jugada_cpu =="piedra"){
                console.log(`Ronda ${num_juegos}: Perdiste contra la máquina`);
                puntaje_cpu++;
                continue
            }
            else if (jugada_cpu == "papel"){
                console.log(`Ronda ${num_juegos}: Felicidades! le ganaste a la máquina`);
                puntaje_usuario++;
                continue
            }
        }
    }

}while(num_juegos < num_juegos_usuario);

// resultado de la partida
console.log("**RESULTADO DE LA PARTIDA**")
console.log(`Puntaje jugador: ${puntaje_usuario}`);
console.log(`Puntaje máquina: ${puntaje_cpu}`);
if (puntaje_cpu > puntaje_usuario){
    console.log("¡Lástima! Perdiste la partida contra la máquina")
}
else if(puntaje_cpu < puntaje_usuario){
    console.log("¡Felicidades! eres el ganador de la partida!")
}
else{
    console.log("Partida empatada entre el jugador y la máquina.")
}