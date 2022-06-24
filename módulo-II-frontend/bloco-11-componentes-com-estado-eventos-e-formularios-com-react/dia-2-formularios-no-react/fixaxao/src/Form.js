import React from 'react';
import TextArea from './TextArea';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      graduation: '',
      description: '',
      like: '',
    }
    this.handlerDesc = this.handlerDesc.bind(this);
  }


  handlerDesc({target}) {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <label>
          Nome
          <input name='name' value={ this.state.name } onChange={ this.handlerDesc } placeholder='Escreva seu nome'/>
        </label><br/>
        <label>
          Idade
          <input name='age' value={ this.state.age } onChange={ this.handlerDesc } placeholder='Escreva sua idade'/>
        </label><br/>
        <label>
          É formado?
          <select name='graduation' value={ this.state.graduation } onChange={ this.handlerDesc }>
            <option>Sim</option>
            <option>Não</option>
          </select>
        </label><br/>
        <TextArea value={ this.state.description } handlerDesc={ this.handlerDesc }/>
        <br/><label>
          Gostou do forms?
          <input type='checkbox' name='like' value={ this.state.like } onChange={ this.handlerDesc }/>
        </label>
        {/* Componente controlado */}
      </form>
    );
  }
  
}

export default Form;