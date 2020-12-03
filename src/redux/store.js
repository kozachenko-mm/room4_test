import { createStore, combineReducers, applyMiddleware } from "redux";
import {tracksReduser} from "./trackReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const rootRedusers = combineReducers({ tracksReduser });
const enhancer = applyMiddleware(thunk);

const store = createStore(tracksReduser,composeWithDevTools(enhancer));

export default store;
