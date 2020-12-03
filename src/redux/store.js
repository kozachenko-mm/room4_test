import {createStore} from 'redux'
import tracksReduser from './trackReduser'
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(tracksReduser, devToolsEnhancer())

export default store