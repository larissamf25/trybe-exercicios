import { combineReducers, createStore } from 'redux';
import saveReducer from '../reducers/saveReducer';

const rootReducer = combineReducers({ saveReducer });

const store = createStore(
  rootReducer,
  window.__REDUX__DEVTOOLS__EXTENSION__&&window.__REDUX__DEVTOOLS__EXTENSION__(),
);

export default store;
