import React from 'react';
import { connect } from 'react-redux';
import CatsList from './cats_list';
import { createCat, fetchCats } from '../../actions/cats_actions';
import { allCats } from '../../reducers/selectors';

import * as CatsApi from '../../util/cats_api_util';

// connect(mapStateToProps, mapDispatchToProps)
// mapStateToProps: hands over the appropriate store data to the
// wrapped component. What do we want to give the CatsList? cats.
//
// mapDispatchToProps: allows the component to call actions to get
// stuff done.

const mapStateToProps = (state) => ({
  // state.cats: { id1: cat1, id2: cat2, }
  cats: allCats(state),
});

const mapDispatchToProps = (dispatch) => ({
  createCat: (catParams) => {
    // createCat(catParams, dispatch);
    const actionFn = createCat(catParams)
    dispatch(actionFn)
  },

  fetchCats: () => {
    console.log('i am fetching cats');
    // fetchCats(dispatch);
    const actionFn = fetchCats();
    dispatch(actionFn);
  }
});

const connectorFunction = connect(mapStateToProps, mapDispatchToProps);
const CatsListContainer = connectorFunction(CatsList);

export default CatsListContainer;



// ...
