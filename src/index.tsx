import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './highlights/store';

import Highlights from './highlights';

// //port { items } from "./highlights/data.json";
const root = document.querySelector('#root');
render(
  <Provider store={store}>
    <Highlights tag="Em Alta" />
  </Provider>,
  root
);

// window.loadHighlights = (selector, props: MainProps) => {
//   const root = document.querySelector(selector);
//   if (!root) return;
//   render(<Highlights {...props} />, root);
// };
