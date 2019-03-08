import axios from 'axios';
import * as types from './action-constants';
const APIUrl = 'http://localhost:3333/smurfs';
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => (dispatch) => {
  axios.get(APIUrl)
    .then(res =>
      dispatch({ type: types.GET_SMURFS_SUCCESS, payload: res.data })
    )
    .catch(err => console.error(err.message));
};

export const addSmurf = (name, age, height) => (dispatch) => {
  axios.post(APIUrl, { name, age: Number(age), height })
    .then(res =>
      dispatch({ type: types.ADD_SMURF_SUCCESS, payload: res.data })
    )
    .catch(err => console.error(err.message));
};

export const deleteSmurf = (id) => (dispatch) => {
  axios.delete(`${APIUrl}/${id}`)
    .then(res =>
      dispatch({ type: types.DELETE_SMURF_SUCCESS, payload: res.data })
    )
    .catch(err => console.error(err.message))
}

export const editSmurf = (name, age, height, id) => (dispatch) => {
  axios.put(`${APIUrl}/${id}`, { name, age: Number(age), height })
    .then(res =>
      dispatch({ type: types.EDIT_SMURF_SUCCESS, payload: res.data })
    )
    .catch(err => console.error(err.message))
}

export const selectCurrentSmurf = (id) => {
  return {
    type: types.SELECT_CURRENT_SMURF,
    payload: id
  }
};

export const deselectCurrentSmurf = () => {
  return {
    type: types.DESELECT_CURRENT_SMURF
  }
};
