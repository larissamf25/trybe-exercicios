import React from 'react';
import Image from './Image';
import './App.css';
import Album from './Album';
import UserProfile from './UserProfile';

class App extends React.Component {
  render() {
    const album01 = {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
      title: 'Mylo Xyloto',
      releaseDate: {
        year: '2011',
        month: '10',
        day: '24',
      },
      others: {
        recordCompany: 'Capitol, Parlophone',
        formats: 'CD, digital'
      }
    };

    const album02 = {
      image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
      title: 'Ghost Stories',
      releaseDate: {
        year: '2014',
        month: '05',
        day: '16',
      },
      others: {
        recordCompany: 'Parlophone',
        formats: 'CD, digital'
      }
    };

    const users = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
      }];

    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((i) => <li>{i}</li>);

    return (
      <div>
        <h1>Testando</h1>
        <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText='Cute cat staring'/>
        <Album album={ album01 } />
        <Album album={ album02 } />
        {/* <UserProfile user={joao} />
        <UserProfile user={amelia} /> */}
        <div>
          {users.map((person, index) => <UserProfile user={person} key={ index }/>)}
        </div>
        <ul>{ items }</ul>
      </div>
    );
  }
}
export default App;
