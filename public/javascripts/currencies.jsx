import React, { Component } from 'react';

class Currencies extends Component {
    render() {

      return (
      <table>
        <tr>
          <th>Bank</th>
          <th>Address</th>
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

export default Currencies;
