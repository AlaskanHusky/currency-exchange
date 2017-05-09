import React, {
  Component
} from 'react';

class ATM extends Component {
  const data;
  fetch('/atm/:id').then(function(res) {
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
      <h2>ATM</h2>
      <span>{this.state.array.bank}</span>
      <span>{this.state.array.atm_info.address}</span>
      <table>
      <tr>
        <th>Currency</th>
        <th>Purchase rate</th>
        <th>Sale rate</th>
        <th>Time</th>
      </tr>
      <tr>
        <td>{this.state.array.exchange_rates.currency_name}</td>
        <td>{this.state.array.exchange_rates.purchase_value}</td>
        <td>{this.state.array.exchange_rates.sale_value}</td>
        <td>{this.state.array.exchange_rates.date}</td>
      </tr>
      </table>
    );
  }
}

export default ATM;
