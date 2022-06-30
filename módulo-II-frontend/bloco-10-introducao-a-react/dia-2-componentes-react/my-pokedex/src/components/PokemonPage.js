import React, { Component } from 'react';
import '../pokeStyle.css'

class PokemonPage extends Component {
  render() {
    const { age } = this.props.match.params;
    return (
      <div>
        <p>Hello world!!</p>
        <p>{ this.props.name }</p>
        <p>{ age }</p>
      </div>
    );
  }
}

export default PokemonPage;