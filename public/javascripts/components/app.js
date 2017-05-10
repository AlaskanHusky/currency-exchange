import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <nav>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="/">Home</a>
          </li>
          <li class="nav-item">
            <a href="/banks">Banks</a>
          </li>
        </ul>
      </nav>
    );
  }
}
export default App;
