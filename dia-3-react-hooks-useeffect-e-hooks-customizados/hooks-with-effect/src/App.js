import { useEffect, useState } from "react";

function App() {
  const [controlTimer, setControlTimer] = useState(true);
  const [timer, setTimer] = useState(0);
  const [number, setNumber] = useState(parseInt(Math.random() * 100));
  // componentWillUnmount
  useEffect(() => {
    setTimeout(() => {
      setTimer(timer + 1)
      if(timer % 10 === 9) setNumber(parseInt(Math.random() * 100));
      console.log(timer);
    }, Number('1000'));
    return () => console.log('desmontou')}, [number, timer]);
  return (
    <div>
      <h1>Timer: { timer }</h1>
      <h1>Number: { number }</h1>
      { ((number % 3 === 0 || number % 5 === 0) && timer % 10 < 4) && <p>Acertou!!!!</p> }
    </div>
  );
}

export default App;

// A cada 10 segundos ele gera e exibe na tela um número aleatório de 1 a 100;
// Se o número for múltiplo de 3 ou 5, uma mensagem "Acerto" é exibida na tela;
// A mensagem de acerto é removida 4 segundos depois de ser exibida;
// O timer é removido quando o componente é desmontado.
