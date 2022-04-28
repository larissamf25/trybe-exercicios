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

// Exercício #1
function createDecember (){
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const weekDaysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList; index += 1){
    const day = dezDaysList[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerText = day;
    dayListItem.className = "day";
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      dayListItem.className = "holiday";
    }
    if (index % 7 === 5){
      dayListItem.className = "friday";
    } 
    weekDaysList.appendChild(dayListItem);
  };
};
createDecember();

// Exercício #2
function holidays(Feriados){

}
holidays();

// Adicione a este botão a ID "btn-holiday" .
// Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// Exercício #3
function color (Feriados){
  Feriados.style.backgroundColor = "rgb(238,238,238)";
}
color();