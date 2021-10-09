import { CREATE_USER, LOGIN, LOGOUT } from '../actionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        ...action.userInfo,
      };
    }
    case LOGIN: {
      return {
        ...state,
        ...action.data,
      };
    }
    // case LOGOUT: {
    //   return {
    //   }
    // }
    default:
      return state;
  }
};

export default user;
