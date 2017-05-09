import React, { Component } from 'react';

class BankInfo extends Component {
    render() {

      return (
      <h2>Banks</h2>
      <ol class="list">
        for (let i = 0; i < 5; i++) {
          <li><a href="#">Элемент списка</a></li>
        }
      </ol>
      );
    }
}

export default BankInfo;
