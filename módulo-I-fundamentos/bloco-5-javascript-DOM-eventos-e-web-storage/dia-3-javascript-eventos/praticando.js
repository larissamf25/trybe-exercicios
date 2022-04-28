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
const days = document.getElementById('days');

//  EXERCÍCIO 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDays() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let item = document.createElement('li');
    item.innerText = dezDaysList[index];
    item.className = "day";
    if (dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31) {
      item.className += " holiday";
    }
    if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25 ) {
      item.className += ' friday';
    }
    days.appendChild(item);
  }
}
createDays();

//  EXERCÍCIO 2
const buttons = document.getElementsByClassName('buttons-container')[0];
function holidaysButton(nomeDoBotao) {
  const button = document.createElement('button');
  button.id = "btn-holiday";
  button.innerText = nomeDoBotao;
  buttons.appendChild(button);
}
holidaysButton("Feriados");

//  EXERCÍCIO 3
let controlHoliday = false;
let color;
document.getElementById("btn-holiday").
addEventListener('click', function() {
  if (controlHoliday === false) {
    color = "red";
    controlHoliday = true;
  } else if (controlHoliday === true) {
    color = "rgb(238,238,238)";
    controlHoliday = false;
  }
  for (let index = 0; index < dezDaysList.length; index += 1) {
    if (days.children[index].className === "day holiday" || days.children[index].className === "day holiday friday") {
      days.children[index].style.backgroundColor = color;
    }
  }
})

//  EXERCÍCIO 4
function fridayButton(nomeDoBotao) {
  const button = document.createElement('button');
  button.id = "btn-friday";
  button.innerText = nomeDoBotao;
  buttons.appendChild(button);
}
fridayButton("Sexta-feira");

//  EXERCÍCIO 5
let controlFriday = false;
let text;
document.getElementById("btn-friday").
addEventListener('click', function() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    if (days.children[index].className === "day friday" || days.children[index].className === "day holiday friday") {
      if(controlFriday === false) {
        days.children[index].innerText = "hehe";
      } else if(controlFriday === true) {
        days.children[index].innerText = dezDaysList[index];
      }
    }
  }
  if (controlFriday === false) {
    controlFriday= true;
  } else if (controlFriday === true) {
    controlFriday = false;
  }
})

//  EXERCÍCIO 6
days.addEventListener('mouseover', function(e) {
  e.target.style.fontSize = "40px";
})
days.addEventListener('mouseout', function(e) {
  e.target.style.fontSize = "20px";
})

//  EXERCÍCIO 7
let taskColor = "rgb(119,119,119)";
const myTasks = document.querySelector('.my-tasks');
function addTask(task) {
  let newTask = document.createElement('span');
  newTask.innerText = task;
  newTask.appendChild(legend("red"));
  myTasks.appendChild(newTask);
}
addTask("cozinhar");

//  EXERCÍCIO 8
function legend(cor) {
  let newLegend = document.createElement('div');
  newLegend.className = "task";
  newLegend.style.backgroundColor = cor;
  taskColor = cor;
  return newLegend;
}

//  EXERCÍCIO 9
const tasks = document.querySelector('.task');
tasks.addEventListener('click', function(e) {
  if(e.target.className === 'task') {
    e.target.className += ' selected';
  } else {
    e.target.className = 'task';
  }
})

//  EXERCÍCIO 10
days.addEventListener('click', function(e) {
  if(e.target.style.color !== taskColor) {
    e.target.style.color = taskColor;
  } else {
    e.target.style.color = "rgb(119,119,119)";
  }
})

//  EXERCÍCIO BÔNUS
const input = document.getElementById('task-input');
const button = document.getElementById('btn-add');
const compromissosList = document.getElementById('compromissos');
button.addEventListener("click", function() {
  if(input.value.length == 0) {
    alert("erro");
  } else {
    let newCompromisso = document.createElement('li');
    newCompromisso.innerText = input.value;
    compromissosList.appendChild(newCompromisso);
  }

})
input.addEventListener("keypress", function(e) {
  if(e.key === "Enter") {
    if(input.value.length == 0) {
      alert("erro");
    } else {
      let newCompromisso = document.createElement('li');
    newCompromisso.innerText = input.value;
    compromissosList.appendChild(newCompromisso);
    }
  }
})