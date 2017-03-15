import { combineReducer } from 'redux';

import sessionReducer from './session_reducer'

const rootReducer = combineReducer({
  session: SessionReducer
});

export default RootReducer;