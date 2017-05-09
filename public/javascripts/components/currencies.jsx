import React, { Component } from 'react';

class Currencies extends Component {
  const data;
  fetch('/currencies').then(function(res) {
    data = res.json();
  })
  constructor() {
    super();
    this.state = {
      array: data
    };
  }

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
        for (var i = 0; i < {this.state.array.length}; i++) {
          <tr>
            <td>{this.state.array.bank}</td>
            <td>{this.state.array.atm_info.address}</td>
            <td>{this.state.array.exchange_rates.currency_name}</td>
            <td>{this.state.array.exchange_rates.purchase_value}</td>
            <td>{this.state.array.exchange_rates.sale_value}</td>
            <td>{this.state.array.exchange_rates.date}</td>
          </tr>
        }
      </table>
    );
  }
}

export default Currencies;
