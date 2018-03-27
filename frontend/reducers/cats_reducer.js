import { RECEIVE_CAT, RECEIVE_CATS } from '../actions/cats_actions';
import _ from 'lodash';

const initialState = {
  1: { id: 1, name: 'gizmo' },
  2: { id: 2, name: 'markov' },
  3: { id: 3, name: 'curie' },
};

export default function catsReducer(state = initialState, action) {
  // state: { ids of cats => cats }
  Object.freeze(state);

  let newState = null;
  switch (action.type) {
  case RECEIVE_CATS:
    // action.cats what kind of thing? object: { id: cat }. For this to
    // be an array.
    newState = {};
    const catsArray = action.cats;
    catsArray.forEach(cat => newState[cat.id] = cat);
    return newState;
  case RECEIVE_CAT:
    newState = Object.assign({}, state);
    const newCat = action.cat;
    newState[newCat.id] = newCat;
    return newState;
  default:
    return state;
  }
}






// ...
