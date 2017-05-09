import React, { Component } from 'react';

class ATM extends Component {
  
    render() {

      return (
      <h2>ATM</h2>
      <span>Bank</span>
      <span>Address</span>
      <table>
        <tr>
          <th>Currency</th>
          <th>Purchase rate</th>
          <th>Sale rate</th>
          <th>Time</th>
        </tr>
        for (let i = 0; i < 5; i++) {
          <tr>
          for (let j = 0; j < 5 ; j++) {
            <td>{i}</td>
          }
          </tr>
        }
      </table>
      );
    }
}

export default ATM;
