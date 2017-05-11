import React, { Component } from 'react';
import Currencies from './currencies';

class App extends Component {
  render() {
    const pcurrencies = [];
    return (
        <Currencies currencies={currencies}/>
    );
  }
}

export default App;
