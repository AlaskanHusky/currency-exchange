import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router, Route } from 'react-router';

var browserHistory = ReactRouter.browserHistory;

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root")
)
