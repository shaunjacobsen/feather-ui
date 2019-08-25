import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default function configureStore(state) {
  const composedEnhancers = composeWithDevTools();

  const store = createStore(rootReducer, state, composedEnhancers);

  return store;
}
