
require('skeleton-scss/scss/skeleton.scss');
require('./theme/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './app/home';

ReactDOM.render(
  <div>
    <div className="header"></div>
    <div className="content">
      <Home></Home>
    </div>
    <div className="footer"></div>
  </div>,
  document.getElementById('app')
);
