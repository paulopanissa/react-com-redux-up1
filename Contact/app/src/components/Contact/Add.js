import React, { Component } from 'react';

class Add extends Component {

  handleClick() {
    const name = this.refs.name.value || '';
    this.props.onAddContact(name);
    this.refs.name.value = '';
    console.log('Name: ', name);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" ref="name"/>
          <button type="button" onClick={() => this.handleClick() }>Click to save</button>
        </form>
      </div>
    );
  }
}

export default Add;
