import * as types from '../actions/ActionTypes';

const initialState = {
  isShowErrorMessage: false,
  isInProgress: false,
};
export default function appState(state = initialState, action = {}) {
  switch (action.type) {
    case types.PROGRESSING:
      return {
        ...state,
        isInProgress: action.data,
      };
    default:
      return state;
  }
}
