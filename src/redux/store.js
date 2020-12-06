import { createStore, combineReducers, applyMiddleware } from "redux";
import { tracksReduser } from "./tracks/trackReduser";
import { artistReduser } from "./artist/artistReduser";
import { searchReduser } from "./searchList/searchListRedusers";
import { composeWithDevTools } from "redux-devtools-extension";
import { loadingReduser } from "./isLoaderReduser";
import { errorReduser } from "./errorReduser";
import thunk from "redux-thunk";

const rootRedusers = combineReducers({
  tracks: tracksReduser,
  artist: artistReduser,
  search: searchReduser,
  isLoading: loadingReduser,
  error: errorReduser,
});
const enhancer = applyMiddleware(thunk);

const store = createStore(rootRedusers, composeWithDevTools(enhancer));

export default store;
