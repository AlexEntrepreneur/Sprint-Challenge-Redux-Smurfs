import {
  GET_SMURFS_SUCCESS,
  ADD_SMURF_SUCCESS,
  DELETE_SMURF_SUCCESS,
  EDIT_SMURF_SUCCESS
} from '../actions/action-constants';

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
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case EDIT_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    default:
      return state;
  }
};
