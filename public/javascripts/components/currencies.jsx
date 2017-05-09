import React, { Component } from 'react';

class Currencies extends Component {
    render() {
      /*let lines = [];
      for (var i = 0; i < 5; i++) {
        lines.push(<tr>);
        for (var j = 0; j < 5; j++) {
          lines.push(<td>i</td>);
        }
        lines.push(</tr>);
      }*/
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
        // {lines}
      </table>
      );
    }
}

export default Currencies;
