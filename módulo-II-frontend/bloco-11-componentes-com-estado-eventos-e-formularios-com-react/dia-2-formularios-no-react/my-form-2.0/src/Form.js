import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf:'',
      adress: '',
      city: '',
      state: '',
      type: '',
      resume: '',
      occupation: '',
      description:'',
    }
    this.handlerStates = this.handlerStates.bind(this);
  }
  handlerStates() {

  }
  render() {
    return (
      <div>
        <form>
          <fieldset>
            <label>
              Name:
              <input maxLength='40' name='name' onChange={ this.handlerStates } value={ this.state.name } required/>
            </label>
          </fieldset>
          <fieldset>
            <label>
              Resume:
              <textarea/>
            </label>
          </fieldset>
        </form>

        <button>Show infos</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default Form;