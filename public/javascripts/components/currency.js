import React, { Component } from 'react';

class Currency extends Component {
  constructor() {
    super();
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <tr>
        <td>{this.props.bank}</td>
        <td>{this.props.address}</td>
        <td>{this.props.currency}</td>
        <td>{this.props.prate}</td>
        <td>{this.props.srate}</td>
        <td>{this.props.time}</td>
      </tr>
    );
  }
}

export default Currency;
