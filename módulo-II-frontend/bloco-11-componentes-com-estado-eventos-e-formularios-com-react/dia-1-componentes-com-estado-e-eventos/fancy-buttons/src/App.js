import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques: 0,
    }
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);
  }

  button1 () {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
  }
  button2 () {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques - 1
    }));
  }
  button3 () {
    this.setState((_estadoAnterior, _props) => ({
      numeroDeCliques: 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick={ this.button1 }>Adiciona 1</button>
        <button onClick={ this.button2 }>Reduz 1</button>
        <button onClick={ this.button3 }>Reseta para 1</button>
        <p>{this.state.numeroDeCliques}</p>
      </div>
    );
  }
}

export default App;
