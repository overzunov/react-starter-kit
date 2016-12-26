import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import reducer from '../reducers';

const promiseMiddlewareConfig = {
    promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR']
};

const middleware = applyMiddleware(thunk, promiseMiddleware(promiseMiddlewareConfig), logger());

export default createStore(reducer, middleware);