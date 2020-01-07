import {GET_USER_DATA} from '../actions/types';

const user = (state = null, action) => {

  switch (action.type) {
    case GET_USER_DATA:
      return action.payload;
      break;
    default:
      return state;
  }
}

export default user;
