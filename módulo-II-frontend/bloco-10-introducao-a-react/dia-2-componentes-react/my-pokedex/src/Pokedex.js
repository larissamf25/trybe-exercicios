import React, { Component } from 'react';
import './pokeStyle.css'

class Pokedex extends Component {
  render() {
    const {id, name, type, averageWeight, image, moreInfo} = this.props.character;
    return (
      <div className='pokeStyle'>
        <hr/>
        <h2>Nome do pokemon: {name}</h2>
        <h3>Tipo do pokemon: {type}</h3>
        <h3>Peso: {averageWeight.value} {averageWeight.measurementUnit}</h3>
        <img src={image} alt={id} /><br/>
        <a href={moreInfo}>More Info about {name}</a><hr/>
      </div>
    );
  }
}

export default Pokedex;