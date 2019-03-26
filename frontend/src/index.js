import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux"
import store from './store/store'
import * as serviceWorker from './serviceWorker'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store={store().store}>
    <PersistGate loading={null} persistor={store().persistor}>
      <App />
    </PersistGate>
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
