const submit = document.getElementById("button-submit");
const clear = document.getElementById("button-clear");
const share = document.getElementById("share-info");
const nome = document.getElementById("nome-completo");
const email = document.getElementById('input-email');

submit.addEventListener("click", function(e) {
  if(share.checked == false) {
    e.preventDefault();
    alert("Sorry, you can't submit your infos! Please check the box.");
  } else if (nome.length < 10 || nome.length > 40 || email.length < 10 || email.length > 50) {
    e.preventDefault();
    alert("Dados inválidos");
  } else {
    alert("Dados enviados com sucesso! Obrigada por participar do concurso TrybeTrip.");
  }
});

clear.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("form").reset();
})