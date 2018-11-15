import { combineReducers } from 'redux';
import { ADD_FRIEND } from './types';

const INITIAL_STATE = {
  current: [],
  possible: [
    'Allie',
    'Gator',
    'Lizzie',
    'Reptar',
  ],
};
const myReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FRIEND:    
      const {
        current,
        possible,
      } = state;
    
      const addedFriend = possible.splice(action.payload, 1);

      // And put friend in friends.current
      current.push(addedFriend);

      // Finally, update our redux state
      const newState = { current, possible };
      return newState;      
    default:
      return state
  }
};

export default combineReducers({
  mine: myReducer,
});