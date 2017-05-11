import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/currencies">Currencies</Link>
          </li>
          <li className="nav-item">
            <Link to="/banks">Banks</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default App;
