import React, { Component } from 'react';
import Item from './Item';


class List extends Component {
  render() {
    return (
      <div>
        {
          this.props.contacts.map((contact, index) => {
            return <Item contact={contact}
                         key={index}
                         onDeleteItem={this.props.deleteItemAction}
                         onEditItem={this.props.editItemAction}
            />
          })
        }
      </div>
    )
  }
}

export default List;
