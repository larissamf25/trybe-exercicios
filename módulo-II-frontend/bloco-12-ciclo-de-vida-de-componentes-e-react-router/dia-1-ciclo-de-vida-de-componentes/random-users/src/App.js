import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Nesse exercício, você construirá um componente em React que exibirá os dados pessoais de usuários entregues por uma api.
  A api utilizada será a randomuser no endereço https://api.randomuser.me/ que, ao ser acessada, entrega um objeto contendo um usuário aleatório e seus dados pessoais num array de nome results. Ciente disto, após ser montado no DOM, o seu componente deve fazer uma requisição para a api randomuser. Utilize o método componentDidMount.
  Enquanto os dados não são entregues, deve ser renderizada uma div com o conteúdo Carregando...
  Após a entrega dos dados, seu componente deve ser renderizado exibindo foto, nome, email e idade do usuário.
  Caso a idade do usuário seja maior que 50, o componente NÃO deve ser renderizado. Aplique esta lógica no método shouldComponentUpdate.*/}
      </div>
    );
  }
}

export default App;
