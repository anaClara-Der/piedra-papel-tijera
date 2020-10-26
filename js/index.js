const body = document.querySelector("body");
const paginaPrincipal = document.querySelector(".container-paginaprincipal");
//Reglas
const botonReglas = document.querySelector(".reglas");
const reglasDesplegable = document.querySelector("#contaiener-desplegable");
const xCerrar = document.querySelector(".x-cerrar");
//juego
const botones = document.querySelectorAll(".botones-click");
let jugadaUsuario;
const fichasEleccion = document.querySelector("#container-juego");
let jugadaMaquina = ["piedra", "papel", "tijera"];
let puntaje = document.querySelector(".num-puntaje");
let numJugada;
let contador = 0;
let containerJugada = document.querySelector("#container-jugada");
let jugador = document.querySelector(".btn-jug-usario"); //ficha que seleccionó el jugador
const imgUsuario = document.querySelector(".img-usuario"); // la imagen que contiene esa ficha
const maquinaBtn = document.querySelector(".btn-jug-maquina");
const imgMaquina = document.querySelector(".img-maquina");
const ganar = document.querySelector(".contenedor-ganar"); //contenedores del juego una vez elegida la ficha por el usuario
const perder = document.querySelector(".contenedor-perder");
const empatar = document.querySelector(".contenedor-empatar");
const btnGanar = document.querySelector(".btn-gan"); //botones para jugar de nuevo
const btnEmpatar = document.querySelector(".btn-emp");
const btnPerder = document.querySelector(".btn-per");

//jUEGO
reglas();
//jugada usario
for (let i = 0; i < botones.length; i++) {
  jugador.classList.remove(botones[i].classList[1]);
  maquinaBtn.classList.remove(`${jugadaMaquina[numJugada]}`);

  botones[i].addEventListener("click", () => {
    jugadaUsuario = botones[i].classList[1];
    fichasEleccion.style.display = "none"; //se ocultan los tres botones
    containerJugada.style.display = "flex";
    jugador.classList.add(botones[i].classList[1]); //al boton le agrego la clase con el color que corresponde
    imgUsuario.setAttribute("src", `images/${jugadaUsuario}.svg`); //al boton le agrego la imagen
    maquina();
    setTimeout(() => {
      maquinaBtn.classList.remove("color");
      maquinaBtn.classList.add(`${jugadaMaquina[numJugada]}`); //el boton de la máquina le agrego el color
      imgMaquina.setAttribute("src", `images/${jugadaMaquina[numJugada]}.svg`);
      maquinaBtn.classList.add("botonAbrir");
      if (
        (jugadaUsuario == "piedra" && jugadaMaquina[numJugada] == "tijera") ||
        (jugadaUsuario == "papel" && jugadaMaquina[numJugada] == "piedra") ||
        (jugadaUsuario == "tijera" && jugadaMaquina[numJugada] == "papel")
      ) {
        contador++;
        puntaje.innerHTML = `${contador}`;
        ganar.style.display = "inline-block";
        setTimeout(() => {
          ganarJugar();
        }, 1000);
      } else if (
        (jugadaUsuario == "piedra" && jugadaMaquina[numJugada] == "piedra") ||
        (jugadaUsuario == "papel" && jugadaMaquina[numJugada] == "papel") ||
        (jugadaUsuario == "tijera" && jugadaMaquina[numJugada] == "tijera")
      ) {
        empatar.style.display = "inline-block";
        setTimeout(() => {
          empatarJugar();
        }, 1000);
      } else {
        perder.style.display = "inline-block";
        setTimeout(() => {
          perderJugar();
        }, 1000);
      }
    }, 200);
  });
}

//FUNCIONES
//juego de la maquina.
function maquina() {
  numJugada = Math.floor(Math.random() * 3);
}
//Reglas
//Abrir
function reglas() {
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
function ganarJugar() {
  btnGanar.addEventListener("click", () => {
    fichasEleccion.style.display = "flex";
    containerJugada.style.display = "none";
    ganar.style.display = "none";
  });
}
function empatarJugar() {
  btnEmpatar.addEventListener("click", () => {
    fichasEleccion.style.display = "flex";
    containerJugada.style.display = "none";
    empatar.style.display = "none";
  });
}
function perderJugar() {
  btnPerder.addEventListener("click", () => {
    fichasEleccion.style.display = "flex";
    containerJugada.style.display = "none";
    perder.style.display = "none";
    contador = 0;
    puntaje.innerHTML = `${contador}`;
  });
}
