import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
// rootReducer는 임의로 붙여준 이름
import rootReducer from './reducer';

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
