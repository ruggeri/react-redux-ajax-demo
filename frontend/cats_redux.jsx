import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const contentEl = document.getElementById('content');

  const store = configureStore();

  ReactDOM.render(
    <Root store={store}/>,
    contentEl
  );
});
