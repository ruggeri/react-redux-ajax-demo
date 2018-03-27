import * as CatsApi from '../util/cats_api_util';

export const RECEIVE_CATS = 'RECEIVE_CATS';
export const RECEIVE_CAT = 'RECEIVE_CAT';

export function receiveCats(cats) {
  return {
    type: RECEIVE_CATS,
    cats
  };
}

export function receiveCat(cat) {
  return {
    type: RECEIVE_CAT,
    cat
  };
}

// higher order function.
export function fetchCats() {
  return function (dispatch) {
    CatsApi.fetchCats().then(cats => {
      // window.cats = cats
      // window.receiveCats = receiveCats
      // window.dispatch = dispatch
      const action = receiveCats(cats);
      // action = { type: RECEIVE_CATS, cats: cats }
      dispatch(action);
    });
  }
}

export function createCat(catParams) {
  return function (dispatch) {
    CatsApi.createCat(catParams).then(cat => {
      const action = receiveCat(cat);
      // action = { type: RECEIVE_CAT, cats: cats }
      dispatch(action);
    });
  }
}





// // ...
