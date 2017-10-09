import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
import Square from './components/Square';
import Knight from './components/Knight';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('root')
);

registerServiceWorker();
