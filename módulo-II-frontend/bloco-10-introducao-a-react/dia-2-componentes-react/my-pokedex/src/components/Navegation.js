import React, { Component } from 'react';
import '../pokeStyle.css'
import { Link } from 'react-router-dom';

class Navegation extends Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <br />
        <Link to="/pokedex">Pokedex</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
    );
  }
}

export default Navegation;