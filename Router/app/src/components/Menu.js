import React, { Component } from 'react';
import { Link} from 'react-router';

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
