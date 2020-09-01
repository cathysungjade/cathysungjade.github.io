import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route } from 'react-router';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App /></Router>,
   document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker()
