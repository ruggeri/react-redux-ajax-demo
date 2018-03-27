export function allCats(state) {
  // { cats: {}, dogs: {}}
  const catsState = state.cats;
  const catIds = Object.keys(catsState);

  // [cat1, cat2, cat3].
  return catIds.map(id => catsState[id]);
}

// export function allLikedCats(state) {
//   const cats = allCats(state);
//
//   return _.filter(cats, (c) => c.isLiked);
// }
