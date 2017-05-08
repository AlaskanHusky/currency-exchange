import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router'

// Main component
render(
  <Router history={browserHistory}>
    <Route path='currencies' component={Currencies} />
    <Route path='banks' component={Banks} />
    <Route path='banks/:id' component={BankInfo} />
    <Route path='atm/:id' component={ATM} />
  </Router>,
  document.getElementById('content')
)
