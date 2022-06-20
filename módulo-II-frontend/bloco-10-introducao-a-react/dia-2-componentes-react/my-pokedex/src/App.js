import pokemon from './data';
import Pokedex from './Pokedex';
import './pokeStyle.css'

function App() {
  return (
    <div className='main'>
      <header>Pokedex Page</header>
      <ul className='pokeList'>
      {pokemon.map((char) => <li> <Pokedex character={ char } key={ char.id }/></li>)}
      </ul>
      <footer>by @Larissa Menezes with Trybe, 2022</footer>
    </div>
  );
}

export default App;
