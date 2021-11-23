 
import {
  UPDATE_SEARCHES, 
  UPDATE_LOCATION, 
} from '../actions/searches-actions';

const INITIAL_STATE = {
  searchHistories: [],
  currentLocation: {},
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SEARCHES:
      return {
        ...state,
        searchHistories:  action.payload
      }
    case UPDATE_LOCATION:
      return {
        ...state,
        currentLocation: action.payload
      }
    default:
      return state

  }
}
