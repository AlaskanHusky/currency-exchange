import React, { Component } from 'react';
import Currencies from './currencies';

class App extends Component {
  render() {
    const currencies = [];
    return (
        <Currencies currencies={currencies}/>
    );
  }
}

export default App;
