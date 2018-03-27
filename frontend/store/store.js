import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const thunkMiddleware = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch);
  }
  return next(action);
};

export default function configureStore() {
  const store = createStore(
    rootReducer,
    { cats: {} },
    applyMiddleware(thunkMiddleware),
  );

  window.store = store;

  return store;
}
