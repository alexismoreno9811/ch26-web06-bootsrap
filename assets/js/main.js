console.log(`Hola desde un scrpit externo`);

function changeColorTo(color){
  const refName = getReferenceFullName();
  refName.style.color = color;
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