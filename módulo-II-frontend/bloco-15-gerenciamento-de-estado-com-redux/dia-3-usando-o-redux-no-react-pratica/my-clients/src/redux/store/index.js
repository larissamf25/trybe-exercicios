import { createStore } from 'redux';
import saveReducer from '../reducers/saveReducer';

const store = createStore(
  saveReducer,
  window.__REDUX__DEVTOOLS__EXTENSION__&&window.__REDUX__DEVTOOLS__EXTENSION__(),
);

export default store;
