import { cleanup, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import userEvent from '@testing-library/user-event';
import renderWithRedux from './helper';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');
    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 } } });
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
describe('practicing clicks', () => {
  beforeEach(cleanup);
  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 0 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('changing the initial value', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 } } });
    const buttonAdicionar = screen.queryByText('Clique aqui');
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});

// import { fireEvent, waitFor } from '@testing-library/react';
// import React from 'react';
// import fetchMock from 'fetch-mock-jest';
// import App from '../App';
// import renderWithRedux from './helpers';

// describe('Página principal', () => {
//   test('Testa que o botão de adicionar cachorro está presente', async () => {
//     const { queryByText } = renderWithRedux(<App />);
//     const buttonDoguinho = queryByText('Novo Doguinho');

//     expect(buttonDoguinho).toBeInTheDocument();

//     fetchMock.getOnce('https://dog.ceo/api/breeds/image/random', {
//       body: { message: 'myDogUrl' },
//     });

//     fireEvent.click(buttonDoguinho);
//     await waitFor(() => expect(fetchMock.called()).toBeTruthy());
//   });
// });
