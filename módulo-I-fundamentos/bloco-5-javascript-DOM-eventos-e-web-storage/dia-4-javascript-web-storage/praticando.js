const button = document.getElementById('add-button');
const input = [document.getElementById('background-input'),document.getElementById('textColor-input'),document.getElementById('fontSize-input'),document.getElementById('lineSpace-input'),document.getElementById('fontType-input')];
const list = document.getElementById('preferences-list');

function insertInfoInDOM(){
  const infosList = JSON.parse(localStorage.getItem('infos'));
  const listLength = infosList.length -1;
  const infoText = infosList[listLength];
  const info = document.createElement('li');
  info.innerText = infoText;
  list.appendChild(info);
}

function addInfoToLocalStorage(){
  const oldList = JSON.parse(localStorage.getItem('infos'));
  const infoText = input.value;
  oldList.push(infoText);
  localStorage.setItem('infos',JSON.stringify(oldList));
  insertInfoInDOM();
}

function initialRenderization(){
  if(localStorage.getItem('infos' === null)){
    localStorage.setItem('infos', JSON.stringify([]));
  } else{
    const infosList = JSON.parse(localStorage.getItem('infos'));
    const listLength = infosList.length -1;
    for(let index = 0; index <= listLength; index += 1){
      const listElement = document.createElement('li');
      listElement.innerText = infosList[index];
      listElement.appendChild(listElement);
    }
  }
}

GamepadButton.addEventListener('click', addInfoToLocalStorage);
window.onload = function(){
  initialRenderization();
}