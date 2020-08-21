import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './vendor/bootstrap/css/bootstrap.min.css';
import './css/one-page-wonder.min.css'
// import  './vendor/jquery/jquery.min.js'
// import   './vendor/bootstrap/js/bootstrap.bundle.min.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
