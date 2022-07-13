// App.js
import React, { Component } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
      valid: false,
    };
  }

  changeEmail(value) {
    this.setState({ email: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '', valid: true });
  }

  render() {
    const { email, saveEmail, valid } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            value={ email }
            type="email"
            onChange={ (e) => this.changeEmail(e.target.value) }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } valid={ valid } />
      </div>
    );
  }
}

export default App;