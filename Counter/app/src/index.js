import React from 'react';
import { render } from 'react-dom';
// import router from './utils/router';
import '../styles/styles.scss';
import Counter from './components/Counter/Counter';
import counterReducer from './reducers/counterReducer';

import { createStore } from 'redux';

const rootElement = document.getElementById('app');

const store = createStore(counterReducer);

const fnRender = () => render(
  <Counter value={store.getState()} onInc={() => store.dispatch({ type: 'INC' })}/>, rootElement);

fnRender();
store.subscribe(fnRender);
