import {ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT} from '../constants/ActionsType';
import { combineReducers } from 'redux';

function contact(state = [], action) {
  switch (action.type) {
    case ADD_CONTACT:
      let obj = [
        ...state,
        {
          name: action.name,
          id: action.id
        }
      ];
      return obj;
      // return {
      //   name: action.name,
      //   id: action.id
      // };
    case DELETE_CONTACT:
      return [
        state.slice(0, action.index)
      ];
    case EDIT_CONTACT:
      return [
        state.slice(0, action.index),
        Object.assign({}, { name: 'Paulo Panissa' })
      ];
    default:
      return state;

  }
}

export default contact;
// const contact = combineReducers({
//
// });
