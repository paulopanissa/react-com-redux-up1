import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addContact, deleteContact, editContact } from '../actions/ActionsContact';
import Add from './Contact/Add';
import List from './Contact/List';

class App extends Component {

  render() {
    const { dispatch, contacts } = this.props;
    return (
      <main>
        <Add
          onAddContact = {
            text => dispatch(addContact(text))
          }
        />
        <List contacts={ contacts }
              deleteItemAction={ index => dispatch(deleteContact(index))}
              editItemAction={ (index, contact) => dispatch(editContact(index, contact)) } />
      </main>
    );
  }
}

function list(state) {
  return {
    contacts: state
  };
}

App = connect(list)(App);
export default App;
