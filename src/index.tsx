import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './highlights/store';

import Highlights from './highlights';

// port { items } from "./highlights/data.json";

window.loadHighlights = (selector, props: MainProps) => {
  const elm = document.querySelector(selector);
  if (!elm) { return; }
  render(
    <Provider store={store}>
      <Highlights {...props} />
    </Provider>,
    elm
  );
};

const root = document.querySelector('#root');
if (root) {
  window.loadHighlights('#root', {tag: 'Em Alta'});
}