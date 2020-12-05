import { createStore, combineReducers, applyMiddleware } from "redux";
import {tracksReduser} from "./tracks/trackReduser";
import { artistReduser} from "./artist/artistReduser";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootRedusers = combineReducers({tracks: tracksReduser,
artist: artistReduser });
const enhancer = applyMiddleware(thunk);

const store = createStore(rootRedusers,composeWithDevTools(enhancer));

export default store;
