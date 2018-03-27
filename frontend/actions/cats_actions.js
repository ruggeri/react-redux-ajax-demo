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
