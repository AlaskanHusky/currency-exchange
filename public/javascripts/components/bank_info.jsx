import React, {
  Component
} from 'react';

class BankInfo extends Component {
  const data;
  fetch('/banks/:id').then(function(res) {
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
      <h2>{this.state.array.bank}</h2>
      <ol class = "list">
      for (var i = 0; i < {this.state.array.length}; i++) {
        <li><a href = "/atm/" + {this.state.array.atm_info.id}>{this.state.array.atm_info.address}</a></li>
      }
      </ol>
    );
  }
}

export default BankInfo;
