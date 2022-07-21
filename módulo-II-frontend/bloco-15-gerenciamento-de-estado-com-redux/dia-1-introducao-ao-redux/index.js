const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const ESTADO_INICIAL = {
  login: false,
  email: "",
  };

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};
  
const store = Redux.createStore(reducer);

store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());

// import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
// import reducerCombinado from './reducers/index';

// const store = createStore(reducerCombinado);

// store.subscribe(() => {
//   console.log(store.getState());
// });
// ...