import React, { Component } from 'react';
import Menu from './menu';

class Banks extends Component {
    constructor() {
      super();
      this.state = {
          banks: []
      }
    }

    componentDidMount() {
      const xmlHttp = new XMLHttpRequest();
      const vm = this;
      xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
               vm.setState({
                   banks: JSON.parse(xmlHttp.responseText)
               });
           }
       };
       xmlHttp.open("GET", `/api/banks/`, true); // true for asynchronous
       xmlHttp.send(null);
    }

   renderItems() {
     return this.state.banks.map(function (bank) {
       return <li>{bank.bank}</li>;
    });
  }

  render() {
      return (
        <div>
          <Menu />
          <ul className="list">
            {this.renderItems()}
          </ul>
        </div>
    );
  }
}

  export default Banks;
