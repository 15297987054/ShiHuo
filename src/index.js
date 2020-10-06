import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '@store'
import App from './App';
import { HashRouter as Router,Route } from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);

