
/* Home */

function changeColorTo(color) {
  const refColor = getReferenceFullName();
  refColor.style.color = color;
};

function getReferenceFullName() {
  return document.getElementById("fullname");
};

function changeColorParagraph(refObj, color) {
  refObj.style.color = color;
};

function resetColorText() {
  const refObjs = document.getElementsByClassName("text-color");
  for (let i = 0; i < refObjs.length; i++) {
    const element = refObjs[i];
    element.style.color = "#000000";
  }
}

/* Cambiar nombre */

function changeName() {
  const name = prompt("¿Cuál es tu nombre?");
  const refName = document.getElementById("change-name");
  refName.innerHTML = "Hola " + name;
}

/* Calculadora */

let valor = (refNum) => {
  refNum.innerHTML = prompt("¿Cuál numero deseas colocar?");
}

function recibirNumeros() {
  return document.getElementsByClassName("numeros");
}

function operar(refSimbolo) {
  const numeros = recibirNumeros();
  const refSigno = document.getElementById("signo");
  refSigno.innerHTML = refSimbolo.innerHTML;
  printRes(eval(numeros[0].innerHTML + refSimbolo.innerHTML + numeros[1].innerHTML));
}

function printRes(resultado) {
  const refRes = document.getElementById("resultado");
  refRes.innerHTML = resultado;
}

/* Adivinar Número */

function iniciarJuego(ref1) {
  vision(ref1);
}

const dirJuego = () => {
  return document.getElementsByClassName("juego");
}

function vision(refBut) {
  const refsJuego = dirJuego();
  refBut.setAttribute("hidden", "");
  for (const indice of refsJuego) {
    indice.removeAttribute("hidden");
  }
}

let max = 100;
let min = 0;

function juegoActivo(valor) {
  const refsJuego = dirJuego();
  let numero = Number(refsJuego[1].innerHTML);
  refsJuego[2].removeAttribute("onclick");
  refsJuego[3].removeAttribute("onclick");
  if (valor == 0) {
    finJuego(refsJuego, numero);
  } else if (valor == 1) {
    refsJuego[0].innerHTML = "¿El número en el que pensaste es menor que: "
    refsJuego[2].setAttribute("onclick", "juegoActivo(3)");
    refsJuego[3].setAttribute("onclick", "juegoActivo(4)");
  } else if (valor == 3) { //si es menor
    max = numero;
    refsJuego[0].innerHTML = "¿El número en el que pensaste es:";
    refsJuego[1].innerHTML = `${Math.round((max + min) / 2)}`;
    refsJuego[2].setAttribute("onclick", "juegoActivo(0)");
    refsJuego[3].setAttribute("onclick", "juegoActivo(1)");
  } else if (valor == 4) { //si no es menor
    min = numero;
    refsJuego[0].innerHTML = "¿El número en el que pensaste es:";
    refsJuego[1].innerHTML = `${Math.round((max + min) / 2)}`;
    refsJuego[2].setAttribute("onclick", "juegoActivo(0)");
    refsJuego[3].setAttribute("onclick", "juegoActivo(1)");
  } else reiniciar(refsJuego);
  console.log(`min: ${min} max: ${max}`);
}

function finJuego(refsJuego, numero) {
  refsJuego[0].innerHTML = `Tu número es el ${numero} excelente decisión`;
  refsJuego[1].setAttribute("hidden", "");
  refsJuego[2].setAttribute("hidden", "");
  refsJuego[3].setAttribute("hidden", "");
  alert(`Tu número es el ${numero} excelente decisión`);
}

function reiniciar(refsJuego) {
  refsJuego[0].innerHTML = "¿El número en el que pensaste es:";
  refsJuego[1].removeAttribute("hidden");
  refsJuego[2].removeAttribute("hidden");
  refsJuego[3].removeAttribute("hidden");
  refsJuego[1].innerHTML = `50` ;
  refsJuego[2].removeAttribute("onclick");
  refsJuego[2].setAttribute("onclick", "juegoActivo(0)");
  refsJuego[3].removeAttribute("onclick");
  refsJuego[3].setAttribute("onclick", "juegoActivo(1)");
  max = 100;
  min = 0;
}