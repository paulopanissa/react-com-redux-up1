import React, { Component } from 'react';

class Item extends Component {

  deleteItem(event) {
    event.preventDefault();

    this.props.onDeleteItem(this.props.id)
  }

  editItem(event) {
    event.preventDefault();
    this.props.onEditItem(this.props.id, this.props.contact)
  }

  render() {
    console.log(this.props.contact);
    return (
      <div>
        <h4>
          {this.props.contact.name}
          <span>|</span>
          <button type="button" onClick={ (e) => this.deleteItem(e) }> x </button>
          <span>|</span>
          <button type="button" onClick={ (e) => this.editItem(e) }> E </button>
        </h4>

      </div>
    )
  }
}

export default Item;
