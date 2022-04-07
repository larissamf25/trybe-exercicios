let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

const base = 5;
var height = 8;
const area = base*height;
const perimeter = 2*(base+height);

// console.log(base);
// console.log(height);
// console.log(area);
// console.log(perimeter);

const score = 95;
if ( score >= 80){
  console.log("Parabéns, você foi aprovada(o)!");
} else if (score >= 60){
  console.log("Você está na nossa lista de espera");
} else{
  console.log("Você foi reprovada(o)");
}

const currentHour = 15;
var message;
if( currentHour>=22){
  message="Não devemos comer nada, é hora de dormir";
} else if (currentHour>= 18){
  message = "Rango da noite, vamos jantar :D";
} else if ( currentHour >= 14){
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11) {
  message = "Hora do almoço!!!";
} else {
  message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

var weekDay = "sabado";
var message2;
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay ==="quarta-feira" || weekDay ==="quinta-feira"|| weekDay ==="sexta-feira"){
  message2 = "Oba, mais um dia de aprendizado na Trybe >:D";
} else {
  message2 = "FINALMENTE, descanso merecido UwU";
}
console.log(message2);

var state = "aprovada";
switch (state){
  case "aprovada":
    console.log("parabéns");
    break;
  case "lista":
    console.log("calma, quase lá");
    break;
  case "reprovada":
    console.log("quem sabe na próxima");
    break;
  default:
    console.log("não se aplica");
}