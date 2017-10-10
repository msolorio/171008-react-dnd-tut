import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { observe } from './Game';
import Board from './components/Board';

import registerServiceWorker from './registerServiceWorker';

observe((knightPosition) => {
  ReactDOM.render(
      <Board knightPosition={knightPosition} />,
      document.getElementById('root')
  );
})

registerServiceWorker();
