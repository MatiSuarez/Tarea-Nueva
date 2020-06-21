import React from 'react';
import ReactDOM from 'react-dom'; //Galerias de React

import './index.css'; //Estilos

import App from './App'; //La aplicacion
import * as serviceWorker from './serviceWorker'; // Aplicaciones que simulan datos de manera local (del servidor) Aplicaciones web progresivas

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
