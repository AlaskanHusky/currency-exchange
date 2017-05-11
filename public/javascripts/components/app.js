import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="/currencies">Currencies</a>
          </li>
          <li className="nav-item">
            <a href="/banks">Banks</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default App;
