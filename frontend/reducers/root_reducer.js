import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

// {
//   cats: {
//     123: { id: 123, name: 'gizmo' }
//   },
//   dogs: {
//     456: { id: 456, name: 'fido' }
//   }
// }

const rootReducer = combineReducers({
  cats: catsReducer,
});

export default rootReducer;
