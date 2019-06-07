import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import './style/style.scss';

import App from './app';

render(
  <App />,
  document.querySelector('#app')
);
