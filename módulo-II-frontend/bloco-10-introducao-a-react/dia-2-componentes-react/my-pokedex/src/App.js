import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './pokeStyle.css'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      card: 0,
      option: 1,
      list: pokemons.filter((pokemon) => pokemon.type === 'Fire'),
      next: true,
    }
    this.handlerCard = this.handlerCard.bind(this);
    this.fireFilter = this.fireFilter.bind(this);
    this.psychicFilter = this.psychicFilter.bind(this);
    this.bugFilter = this.bugFilter.bind(this);
    this.poisonFilter = this.poisonFilter.bind(this);
    this.dragonFilter = this.eletricFilter.bind(this);
    this.eletricFilter = this.eletricFilter.bind(this);
    this.normalFilter = this.normalFilter.bind(this);
    this.allFilter = this.allFilter.bind(this);
    this.handleVerification = this.handleVerification.bind(this);
  }
  handlerCard() {
    this.setState((estadoAnterior, _second) => ({
      card: (estadoAnterior.card === this.state.list.length - 1) ? 0 : estadoAnterior.card + 1
    }));
  }
  fireFilter() {
    console.log(this.state.option);
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 1) ? 0 : 1,
      list: (estadoAnterior.option !== 1) ? pokemons.filter((pokemon) => pokemon.type === 'Fire') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  psychicFilter() {
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 2) ? 0 : 2,
      list: (estadoAnterior.option !== 2) ? pokemons.filter((pokemon) => pokemon.type === 'Psychic') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  bugFilter() {
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 3) ? 0 : 3,
      list: (estadoAnterior.option !== 3) ? pokemons.filter((pokemon) => pokemon.type === 'Bug') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  poisonFilter() {
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 4) ? 0 : 4,
      list: (estadoAnterior.option !== 4) ? pokemons.filter((pokemon) => pokemon.type === 'Poison') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  dragonFilter() {
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 5) ? 0 : 5,
      list: (estadoAnterior.option !== 5) ? pokemons.filter((pokemon) => pokemon.type === 'Dragon') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  eletricFilter() {
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 6) ? 0 : 6,
      list: (estadoAnterior.option !== 6) ? pokemons.filter((pokemon) => pokemon.type === 'Electric') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  normalFilter() {
    this.setState((estadoAnterior, _second) => ({
      option: (estadoAnterior.option === 7) ? 0 : 7,
      list: (estadoAnterior.option !== 7) ? pokemons.filter((pokemon) => pokemon.type === 'Normal') : pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  allFilter() {
    this.setState((_estadoAnterior, _second) => ({
      option: 0,
      list: pokemons,
      card: 0,
    }), () => this.handleVerification());
  }
  handleVerification() {
    this.setState((_estadoAnterior, _second) => ({
      next: (this.state.list.length <= 1) ? true : false,
    }));
  }
  render() {
    return (
      <div className='main'>
        <header>Pokedex Page</header>
        <button onClick={ this.handlerCard } disabled={ this.state.next }>Próximo Pokemon</button>
        <button onClick={ this.fireFilter } >Fire</button>
        <button onClick={ this.psychicFilter }>Psychic</button>
        <button onClick={ this.bugFilter }>Bug</button>
        <button onClick={ this.poisonFilter }>Poison</button>
        <button onClick={ this.dragonFilter }>Dragon</button>
        <button onClick={ this.eletricFilter }>Eletric</button>
        <button onClick={ this.normalFilter }>Normal</button>
        <button onClick={ this.allFilter }>All</button>
        <ul className='pokeList'>
          {/* {pokemon.map((char) => <li> <Pokedex character={ char } key={ char.id }/></li>)} */}
          <li><Pokedex character={ this.state.list[this.state.card] } key={ this.state.list[this.state.card].id }/></li>
        </ul>
        <footer>by @Larissa Menezes with Trybe, 2022</footer>
      </div>
    );
  }
}

export default App;
