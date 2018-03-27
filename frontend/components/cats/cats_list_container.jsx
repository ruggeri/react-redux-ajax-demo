import React from 'react';
import { connect } from 'react-redux';
import CatsList from './cats_list';
import { receiveCat } from '../../actions/cats_actions';
import { allCats } from '../../reducers/selectors';

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
  createCat: (cat) => {

    // { type: RECEIVE_CAT, cat: { name: 'BREAKFAST', }};
    // dispatch => to the store.
    const action = receiveCat(cat);
    dispatch(action);
  },
});

const connectorFunction = connect(mapStateToProps, mapDispatchToProps);
const CatsListContainer = connectorFunction(CatsList);

export default CatsListContainer;



// ...
