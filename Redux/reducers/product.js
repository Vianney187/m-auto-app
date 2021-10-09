import { GET_PRODUCTS } from '../actionTypes';

const product = (state = {products: []}, action ) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.data,
        loading: false
      };
    }
    default:
      return state;
  }
};

export default product;
