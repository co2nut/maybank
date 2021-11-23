import { combineReducers } from 'redux';

import SearchesReducer from './searches-reducer';

const reducers = {
  searches: SearchesReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
