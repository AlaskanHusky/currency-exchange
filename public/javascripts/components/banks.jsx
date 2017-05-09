import React, { Component } from 'react';

class Banks extends Component {
  const data;
  fetch('/banks').then(function(res) {
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
      <h2>Banks</h2>
      <ol class = "list">
        for (var i = 0; i < {this.state.array.length}; i++) {
          <li><a href = "/banks/" + {this.state.array._id}> {this.state.array.bank} </a></li>
      }
      </ol>
    );
  }
}

export default Banks;
