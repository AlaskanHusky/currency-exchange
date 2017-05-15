import React, { Component } from 'react';
import Currency from './currency';
import Menu from './menu';

class Currencies extends Component {
    constructor() {
      super();
      this.state = {
          currencies: []
      }
    }

    componentDidMount() {
      const xmlHttp = new XMLHttpRequest();
      const vm = this;
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
               vm.setState({
                   currencies: JSON.parse(xmlHttp.responseText)
               });
           }
       };
       xmlHttp.open("GET", `/api/currencies/`, true); // true for asynchronous
       xmlHttp.send(null);
   }

   renderItems() {
     return this.state.currencies.map((currency) =>
       <Currency bank={currency.bank}
                address={currency.atm_info.address}
                currency={currency.exchange_rates.currency_name}
                prate={currency.exchange_rates.purchase_value}
                srate={currency.exchange_rates.sale_value}
                time={currency.exchange_rates.date}
              />
     );
   }

  render() {
      return (
        <div>
          <Menu />
          <table>
            <thead>
              <tr>
                <th>Bank</th>
                <th>Address</th>
                <th>Currency</th>
                <th>Purchase rate</th>
                <th>Sale rate</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItems()}
            </tbody>
          </table>
      </div>
    );
  }
}

export default Currencies;
