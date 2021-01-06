import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider }from "react-redux";
import thunk from "redux-thunk";
import './index.css';
import Stats from './components/Stats';
import { dotaReducer } from './reducers/dotaReducer';

const store = createStore(dotaReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Stats/>
  </Provider>,
  document.getElementById('root')
);

