import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import {composeWithDevTools} from "redux-devtools-extension";

export const configureStore = () => {
	const initialStore = {
		people: {}
	};

	const store = createStore(
		rootReducer,
		initialStore,
		composeWithDevTools(applyMiddleware(thunk))
	);

	return store;
};
