import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router'
import Currencies from './components/currencies.jsx'
import Banks from './components/banks.jsx'
import BankInfo from './components/bank_info.jsx'
import ATM from './components/atms.jsx'

var browserHistory = ReactRouter.browserHistory;
// Main component
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='currencies' component={Currencies} />
    <Route path='banks' component={Banks} />
    <Route path='banks/:id' component={BankInfo} />
    <Route path='atm/:id' component={ATM} />
  </Router>,
  document.getElementById('content')
)
