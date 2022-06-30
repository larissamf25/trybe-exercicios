import React from 'react';
import './pokeStyle.css'
import { Route, Switch } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import NotFound from './components/NotFound';
import Navegation from './components/Navegation';
import About from './components/About';
import Contact from './components/Contact';

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <header>Pokedex Page</header>
          <Switch>
            <Route path="/navegation"><Navegation /></Route>
            <React path="/about"><About /></React>
            {/* <React path="/contact"><Contact /></React> */}
            <Route exact path="/pokedex"><Pokedex /></Route>
            <Route path="*" component={ NotFound } />
          </Switch>
        <footer>by @Larissa Menezes with Trybe, 2022</footer>
      </div>
    );
  }
}

export default App;
