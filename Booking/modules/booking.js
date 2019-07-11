import { browserHistory } from 'react-router';
// ------------------------------------
// Constants
// ------------------------------------
export const GET_DATA = 'GET_DATA';
export const SET_USERS_DATA = 'SET_USERS_DATA';
export const SET_SLOT ='SET_SLOT';
export const SELECT_SLOT = 'SELECT_SLOT';
export const GET_NAME = 'GET_NAME';
export const GET_CAPACITY = 'GET_CAPACITY';
export const GET_ARRAY_OF_OBJECT = 'GET_ARRAY_OF_OBJECT';
export const UPDATE_CAPACITY = 'UPDATE_CAPACITY';


// ------------------------------------
// Actions
// ------------------------------------
export const setUsersData = (data) => {
  return {
    type : SET_USERS_DATA,
    users : data
  }
}

export const setSlot = (data) => {
  return {
    type : SET_SLOT,
    slot : data
  }
}

export const selectSlot = (data) => {
  return {
    type: SELECT_SLOT,
    selectSlotData: data
  }
}

export const getName = (data) => {
  return {
    type: GET_NAME,
    name: data
  }
}

export const getCapacity = (data) => {
  return {
    type: GET_CAPACITY,
    capacity: data
  }
}

export const getArrayOfObject = (data) => {
  return {
    type:GET_ARRAY_OF_OBJECT,
    arrayObj:data
  }
}

export const updateCapacityNew = (data) => {
  return {
    type:UPDATE_CAPACITY,
    updateCapacity:data
  }
}

export const getSlot = (value) => {
  return (dispatch) => {
    const usersData = JSON.parse(localStorage.getItem('Theatre'));
    const array = [];
     usersData.map(item =>{
        if(value === item.Name) {
             array.push(item.slot);
        }
    })
    dispatch(setSlot(array));
  }
}

export const selectSlotData = (value,valueTheatre) => {
  return (dispatch) => {
    console.log('=============theatre',valueTheatre);
    const users = JSON.parse(localStorage.getItem('Theatre'));
    const capacity = [];
    if(users!=null) {
      users.map(item => {
        if(value === item.slot) {
          if(item.slot!=null) {
            capacity.push(item.Capacity);
          }
        }
      })
    }
    //-----------
    //getmoviename
    //-----------
    const movieData = JSON.parse(localStorage.getItem('Movie'))
    const movies = [];
    if(movieData!=null) {
      movieData.map(itemMovie =>{
        if(valueTheatre === itemMovie.Theatre) {
          movies.push(itemMovie.Movie);
        }
      })
    }
    const arrayObj = [];
    if(movies!=null) {
      movies.map(itemM =>{
       if(capacity!=null) {
         capacity.map(item =>{
           arrayObj.push({
             movie:itemM,
             capacity:item
           })
         })
       }
      })
    }
    dispatch(getName(movies));
    dispatch(getCapacity(capacity));
    dispatch(getArrayOfObject(arrayObj));
  }
}

export const updateCapacity = (value,theatreValue) => {
  return (dispatch) => {
      let theatre = JSON.parse(localStorage.getItem('Theatre'));
      if(theatre!=undefined) {
        theatre.map(item => {
          console.log('reached - 1', parseInt(item.Capacity), value);

          if(parseInt(value) === parseInt(item.Capacity)) {
            if(theatreValue == item.Name) {
              console.log('check----if');
              item.Capacity = parseInt(item.Capacity) - 1;
            }
          }
        })
      }
    console.log('--------------',theatre);
    localStorage.setItem('Theatre', JSON.stringify(theatre)); 
    dispatch(updateCapacityNew());
  }
}

export const getUser = () => {
  return (dispatch) => {

    dispatch(setUsersData(['firstname' : 'test']));
  }
}

// ------------------------------------
// Actions creator
// ------------------------------------

export const ACTION_HANDLERS = {
  [SET_USERS_DATA] : (state, action) => {
    return {
      ...state,
      users : action.users
    }
  },
  [SET_SLOT] : (state, action) => {
    return {
      ...state,
      slot : action.slot
    }
  },
  [SELECT_SLOT] : (state, action) => {
    return {
      ...state,
      getSlot : action.getSlot
    }
  },
    [GET_NAME] : (state, action) => {
      return {
        ...state,
        name : action.name
      }
  },
  [GET_CAPACITY] : (state, action) => {
    return {
      ...state,
      capacity : action.capacity
    }
 },
 [GET_ARRAY_OF_OBJECT] : (state, action) => {
   return {
     ...state,
     arrayObj : action.arrayObj
   }
 },
 [UPDATE_CAPACITY] : (state, action) => {
   return {
     ...state,
     updateCapacity : action.updateCapacity
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
  users : [],
  slot:[],
  movie:[],
  capacity:[],
  arrayObj:[{
    movie:'terminator',
    capacity:'75'
  }],
  updateCapacity:[],
}

export default function listReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
