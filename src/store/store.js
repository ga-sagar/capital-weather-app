import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from './RootReducer';

const middlewares = [thunk];
const enhancers = applyMiddleware(...middlewares);

export const store = createStore(
    rootReducer,
    compose(enhancers)
);
