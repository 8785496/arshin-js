import {createStore, applyMiddleware} from 'redux';
import chunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

export default createStore(reducer, applyMiddleware(chunk, logger));