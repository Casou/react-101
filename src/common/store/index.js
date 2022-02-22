// Create the initial store here and call redux methods

import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "./reducers"

const initialStore = {
  recipes: [],
};

const store = createStore(reducers, initialStore,
  composeWithDevTools(applyMiddleware(thunk)));

export default store;