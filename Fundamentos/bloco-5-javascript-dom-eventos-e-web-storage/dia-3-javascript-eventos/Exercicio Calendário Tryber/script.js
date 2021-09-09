function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function createDaysOfMonth(){
    let getDaysList = document.querySelector("#days"); // captura elemento ul

    for(let index = 0; index < dezDaysList.length; index ++){
      let day = dezDaysList[index]; // recebe o valor 
      let dayItem = document.createElement("li"); // cria um "li" toda vez que for chamado

      if (day){
        dayItem.className = "day "; // criou dia
        dayItem.innerHTML = day; // escreveu no html o numero do dia
        getDaysList.appendChild(dayItem); // criou o elemento acima como filho de "ul"
      }

      if (day === 24 || day === 25 || day === 31){
        dayItem.className += "holiday "; // criou o feriado
        dayItem.innerHTML = day; // escreveu no html o dia
        getDaysList.appendChild(dayItem); // criou o elemento acima como filho de "ul"
      }

      if (day === 4 || day === 11 || day === 18 || day === 25){
        dayItem.className += "friday"; // criou a sexta feira
        dayItem.innerHTML = day; // escreveu no html o dia
        getDaysList.appendChild(dayItem); // criou o elemento como filho de "ul"
      }



    }

  }
  createDaysOfMonth();

  function createButtonHollidays (){
    let buttonContainer = document.querySelector(".buttons-container"); // captura o local onde o botao vai ficar que ja esta definido no HTML
    let newButton = document.createElement("button"); // cria o botao no html
    let newButtonId = "btn-holliday"; // cria o id que o botao vai usar

    newButton.innerHTML = "Feriados"; // nome do botao
    newButton.id = newButtonId;
    buttonContainer.appendChild(newButton);


  }

  createButtonHollidays();

  function buttonChangeColor (){
    let buttonClick = document.querySelector("#btn-holliday"); // captura o botao que vai receber o click
    let daysClick = document.querySelectorAll(".day holiday") // capturei os dias que vao mudar 
    let colorChange = "red";
    let originalColor = "white";

    buttonClick.addEventListener("click", function(){
      for(let index = 0; index < daysClick.length; index ++){
        if(daysClick[index].style.backgroudColor === originalColor){
          daysClick[index].style.backgroudColor = colorChange;
        }else{
          daysClick[index].style.backgroudColor = originalColor;
        }
      }

    })

    
    displayHolidays();

  }

  buttonChangeColor();

  