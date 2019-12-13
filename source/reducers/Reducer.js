import {combineReducers} from 'redux';
import user from './User';
import appState from './AppState';

export default combineReducers({
  user,
  appState,
});
