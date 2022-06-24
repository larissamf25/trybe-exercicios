import React from 'react';

class TextArea extends React.Component {
  render() {
    const { value, handlerDesc } = this.props;
    let error = undefined;
    if (value.length > 10) {
      error = 'Mensagem muito grande!';
    }
    return (
      <label>
        Descreva sobre você
        <textarea
          name='description'
          value={ value }
          onChange={ handlerDesc }
          placeholder='Descreva sobre você'/>
        <span>{ (error) ? error : '' }</span>
      </label>
    );
  }
}
export default TextArea;