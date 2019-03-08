import { GET_SMURFS_SUCCESS } from '../actions/action-constants';

const initialSmurfsState = {
  smurfs: [],
  error: null
}

export const smurfsReducer = (state = initialSmurfsState, action) => {
  switch (action.type) {
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
