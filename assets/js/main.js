function changeColorTo(color){
  const refColor = getReferenceFullName();
  refColor.style.color = color;
};

function getReferenceFullName(){
  return document.getElementById("fullname");
};

function changeColorParagraph(refObj, color){
  refObj.style.color = color;
};

function resetColorText(){
  const refObjs = document.getElementsByClassName("text-color");
  for (let i = 0; i < refObjs.length; i++) {
    const element = refObjs[i];
    element.style.color = "#000000";
  }
}

function changeName() {
  const name = prompt("¿Cuál es tu nombre?");
  const refName = document.getElementById("change-name");
  refName.innerHTML = "Hola " + name;
}

let valor = (refNum) => {
  refNum.innerHTML = prompt("¿Cuál numero deseas colocar?");
}

function recibirNumeros() {
  return  document.getElementsByClassName("numeros");
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