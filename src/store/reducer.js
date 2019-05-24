import { combineReducers } from 'redux';
import peopleReducer from './people/reducer';
import craReducer from './cra/reducer';

export default combineReducers({
	people: peopleReducer,
	cra: craReducer
});