import React, { Component } from 'react';
import Menu from "./Menu";

class Hello extends Component {
  render() {
    return (
      <div>
        <Menu/>
        <h2>Hello World, curso SON.</h2>
        <h3> {this.props.params.name } </h3>
      </div>
    )
  }
}

export default Hello;
