const calcularFecha = document.getElementById(`buttonCalcular`);

getDay = () => {
  const day = document.getElementsByClassName(`form-control`);
  date = new Date(`${day[0].value} ${day[1].value}, ${day[2].value}`);
  return date.getDay();
};

calcularFecha.addEventListener("click", (event) => {
  event.preventDefault();
  const day = getDay();
  const resultRef = document.getElementById(`result`);
  const week = [`Domingo`, `Lunes`, `Martes`, `Miercoles`, `Jueves`, `Viernes`, `Sabado`];

  if (day > 0 && day < 6)
    resultRef.innerHTML = `${week[day]}, día laborable`;
  else 
    resultRef.innerHTML = `${week[day]}, día no laborable`;
});


