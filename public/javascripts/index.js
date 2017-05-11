import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Menu from './components/menu';
import Currencies from './components/currencies';
import Banks from './components/banks';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Menu} />
      <Route path="/currencies" component={Currencies} />
      <Route path="/banks" component={Banks} />
    </div>
  </Router>,
  document.getElementById("root")
)
