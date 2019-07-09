import { browserHistory } from 'react-router';
// ------------------------------------
// Constants
// ------------------------------------
export const GET_DATA = 'GET_DATA';
export const SET_USERS_DATA = 'SET_USERS_DATA';


// ------------------------------------
// Actions
// ------------------------------------
export const setUsersData = (data) => {
  return {
    type : SET_USERS_DATA,
    users : data
  }
}

export const getData = () => {
  return (dispatch) => {
    const usersData = JSON.parse(localStorage.getItem('user'));
    dispatch(setUsersData(usersData));
  }
}

// ------------------------------------
// Actions creator
// ------------------------------------

export const ACTION_HANDLERS = {
  [SET_USERS_DATA]:(state, action) => {
    return {
      ...state,
      users : action.users
    }
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------




// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  counter: 0,
  users : []
}

export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
