import {applyMiddleware, createStore, compose} from 'redux';
import initialState from './initialState';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { offline } from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import NetInfo from '@react-native-community/netinfo';
import { LOGOUT } from '../actionTypes';

const unsubscribe = NetInfo.addEventListener(state => {
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
      return reducers({}, action);
  }
  return reducers(state, action);
};

const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    offline({...offlineConfig, 
      effect: (effect, action) => {
        if(effect.custom) return effect.custom(effect.json);
        return new Promise.resolve({})
    },})
  ));

export default store;
