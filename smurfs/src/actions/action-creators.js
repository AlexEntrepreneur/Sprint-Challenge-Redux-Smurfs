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
    .catch(err => console.log(err.message));
};
