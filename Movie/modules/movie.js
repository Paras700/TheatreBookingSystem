// ------------------------------------
// Constants
// ------------------------------------
export const ADD_MOVIES = 'ADD_MOVIES';
export const SET_ITEMS_TO_LOCALSTORAGE = 'SET_ITEMS_TO_LOCALSTORAGE';

// ------------------------------------
// Actions
// ------------------------------------
export const addMovielist = (values) => {
  return dispatch => {
    let val = localStorage.getItem('Movie');
    let data = JSON.parse(val);
    let array = [];
    if(data!=null) {
       data.map(function(v){
         array.push(v);
       })
     }
         array.push(values);
         localStorage.setItem('Movie', JSON.stringify(array));
     }
      dispatch(setItemToLocalStorage(values));
  }
//
  export const setItemToLocalStorage = (values) => {
    return {
      type: ADD_MOVIES,
      items: values
   }
}
/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const actions = {
   addMovielist
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [ADD_MOVIES]: (state ={}, action) => {
    return {
      ...state,
      items: action.items
    };
  },
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  items: []
};

export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
