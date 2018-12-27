import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import router from './utils/router';
import '../styles/styles.scss';
import Reducers from './reducers/reducers';
import App from './components/App';

const rootElement = document.getElementById('app');
const store = createStore(Reducers);

const fnRender = () => render(
  <Provider store={ store }>
    <App />
  </Provider>
  , rootElement);

fnRender();
