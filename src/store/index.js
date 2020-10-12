import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {people} from './reducer';

const initialStore = {
    people: []
};

export const store = createStore(people, initialStore,
    composeWithDevTools(applyMiddleware(thunk)));
