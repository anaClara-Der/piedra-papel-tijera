//juego
let contador = 0;
let containerJugada = document.querySelector("#container-jugada");
let jugador = document.querySelector(".btn-jug-usario"); //ficha que seleccionó el jugador
 // la imagen que contiene esa ficha
const maquinaBtn = document.querySelector(".btn-jug-maquina");
const imgMaquina = document.querySelector(".img-maquina");

//juego de la maquina.
const maquina=() =>{
  let numJugada = Math.floor(Math.random() * 3);
  return numJugada;
}

//Jugada de usuario
const jugada = () =>{
  const botones = document.querySelectorAll(".botones-click");
  let jugadaUsuario;
  let fichasEleccion = document.querySelector("#container-juego");
  let jugadaMaquina = ["piedra", "papel", "tijera"];
  let puntaje = document.querySelector(".num-puntaje");
  const imgUsuario = document.querySelector(".img-usuario");

  for (let i = 0; i < botones.length; i++) {
    let numJugada = maquina(); //Guarda la jugada de la máquina
    let result = document.querySelector(".contenedor-result");
    let texto = document.querySelector(".text-per-gan");
    maquinaBtn.classList.remove(`${jugadaMaquina[numJugada]}`);
    //Seleccion de ficha para jugar
    botones[i].addEventListener("click", () => {
      jugadaUsuario = botones[i].classList[1];
      fichasEleccion.style.display = "none"; //se ocultan los tres botones
      containerJugada.style.display = "flex";
      jugador.classList.add(botones[i].classList[1]); //al boton le agrego la clase con el color que corresponde
      imgUsuario.setAttribute("src", `images/${jugadaUsuario}.svg`); //al boton le agrego la imagen
      
      setTimeout(() => {
        maquinaBtn.classList.remove("color");
        maquinaBtn.classList.add(`${jugadaMaquina[numJugada]}`); //el boton de la máquina le agrego el color
        imgMaquina.setAttribute("src", `images/${jugadaMaquina[numJugada]}.svg`);
        maquinaBtn.classList.add("botonAbrir");
        //opciones 
       
         //contenedores del juego una vez elegida la ficha por el usuario
        if (
          (jugadaUsuario == "piedra" && jugadaMaquina[numJugada] == "tijera") ||
          (jugadaUsuario == "papel" && jugadaMaquina[numJugada] == "piedra") ||
          (jugadaUsuario == "tijera" && jugadaMaquina[numJugada] == "papel")
        ) {
          contador++;
          
          texto.textContent = "Ganaste";
          puntaje.innerHTML = `${contador}`;
          result.style.display = "inline-block";
          setTimeout(() => {
            resultadoReinicio();
          }, 1000);
          //Empate
        } else if (
          (jugadaUsuario == "piedra" && jugadaMaquina[numJugada] == "piedra") ||
          (jugadaUsuario == "papel" && jugadaMaquina[numJugada] == "papel") ||
          (jugadaUsuario == "tijera" && jugadaMaquina[numJugada] == "tijera")
        ) {
          texto.textContent = "Empate";
          result.style.display = "inline-block";
          setTimeout(() => {
            resultadoReinicio();

          }, 1000);
        } else {
          texto.textContent = "Perdiste";
          result.style.display = "inline-block";
          setTimeout(() => {
            resultadoReinicio();
          }, 1000);
        }
      }, 200);
    });
  }
}

//Reglas
const reglas = () =>{
  const paginaPrincipal = document.querySelector(".container-paginaprincipal");
  const botonReglas = document.querySelector(".reglas");
  const reglasDesplegable = document.querySelector("#contaiener-desplegable");
  const xCerrar = document.querySelector(".x-cerrar");
  const body = document.querySelector("body");
  botonReglas.addEventListener("click", () => {
    paginaPrincipal.style.display = "none";
    reglasDesplegable.style.display = "flex";
    reglasDesplegable.classList.add("abrir");
    body.style.backgroundColor = "#ffffff";
  });
  //cerrar
  xCerrar.addEventListener("click", () => {
    reglasDesplegable.style.display = "none";
    paginaPrincipal.classList.add("cerrar");
    paginaPrincipal.style.display = "flex";
    body.style.backgroundColor = "hsl(237, 49%, 15%)";
  });
}

//REINICIO
const resultadoReinicio = ()=>{
  let fichasEleccion = document.querySelector("#container-juego");
  let result = document.querySelector(".contenedor-result");
  let puntaje = document.querySelector(".num-puntaje");
  const btnNuevoJuego = document.querySelector(".btn-per");
  btnNuevoJuego.addEventListener("click", () => {
    fichasEleccion.style.display = "flex";
    containerJugada.style.display = "none";
    result.style.display = "none";
    puntaje.innerHTML = `${contador}`;
    jugador.classList.remove("tijera");
    jugador.classList.remove("piedra");
    jugador.classList.remove("papel");
    maquinaBtn.classList.remove("piedra");
    maquinaBtn.classList.remove("papel");
    maquinaBtn.classList.remove("tijera");
  });
}


//jUEGO
reglas();
jugada();