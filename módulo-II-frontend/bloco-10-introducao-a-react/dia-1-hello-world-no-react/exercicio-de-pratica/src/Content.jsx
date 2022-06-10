import React, { Component } from 'react';

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    return (
      conteudos.map((cont, index) => {
        return (
          <li> {index + 1}
            <p>Conteudo: {cont.conteudo}</p>
            <p>Status: {cont.status}</p>
            <p>Bloco: {cont.bloco}</p>
          </li>
        )
      })
    );
  }
}
  
export default Content;