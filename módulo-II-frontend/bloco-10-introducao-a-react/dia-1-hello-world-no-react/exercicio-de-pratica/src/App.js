import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from  './Footer';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
};

class App extends React.Component {
  render() {
    // const tasks = ['Ler livro', 'Praticar Duolingo', 'Treinar lógica'];
    // return ( tasks.map((task) => Task(task)));
    return (
      <div>
        <header className='header'>
          <Header/>
        </header>
        <main className='content'>
          <Content/>
        </main>
        <footer className='footer'>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
