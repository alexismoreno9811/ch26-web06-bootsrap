
const url = 'https://reqres.in/api/users?delay=3';

const getData = async (httpUrl) => {
  try {
    const productObj = await fetch(httpUrl);
    const jsonObj = await productObj.json();
    localStorage.setItem(`mis-productos`, JSON.stringify(jsonObj.data));
  } catch (error) {
    console.log(error);
  }
};

const printData = async () => {
  const date = new Date;
  const diferencia = (date - localStorage.getItem('date')) / 1000;
  if (localStorage.getItem('date') == null || diferencia > 60) {
    localStorage.setItem('date', date.getTime());
    const spinner = document.getElementById('spinner');
    spinner.innerHTML = `<div class="spinner-border text-danger" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;
    for (let i = 0; i < 6; i++) {
      let empty = document.getElementById(`datos${i}`);
      empty.innerHTML = ``;
    };
    await getData(url, date);
    const users = JSON.parse(localStorage.getItem('mis-productos'));
    spinner.innerHTML = ``;
    for (let i = 0; i < users.length; i++) {
        printDoom(users[i], i);
    };
  }
  else if(spinner.innerHTML === ``){
    const users = JSON.parse(localStorage.getItem('mis-productos'));
    for (let i = 0;i < users.length ;i++){
      printDoom(users[i], i);
    };
  }
};

const printDoom = (element,num=0) => {
  const users = document.getElementById(`datos${num}`);
  users.innerHTML = `
      <div class="card" style="width: 100%;">
        <img class="card-img-top rounded-circle" src="${element.avatar}" alt="Card image cap">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"> <strong>id:</strong> ${element.id}</li>
          <li class="list-group-item"> <strong>First Name:</strong> ${element.first_name}</li>
          <li class="list-group-item"> <strong>Last Name:</strong> ${element.last_name}</li>
          <li class="list-group-item"> <strong>e-mail:</strong> ${element.email}</li>
        </ul>
      </div>
    `;
};
