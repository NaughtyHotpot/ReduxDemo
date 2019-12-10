import * as types from '../actions/ActionTypes';

const initialState = {
  mobile: '',
  name: '',
  authToken: 'initToken',
  token: 'init',
  userId: '0',
  isUserOperator: false,
  location: null,
  locationInServer: null,
  oneMapToken: null,
  isLeader: false,
};
export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_USER_ID:
      return {
        ...state,
        mobile: action.data,
      };
    case types.IS_LOGOUT:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
