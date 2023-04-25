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
  refName.innerHTML="Hola " + name;
}