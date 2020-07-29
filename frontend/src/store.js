
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Days from './reducers';

export default createStore(Days, applyMiddleware(thunk));