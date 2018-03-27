import React from 'react';
import CatsForm from './cats_form';
import CatsListItem from './cats_list_item';

const CatsList = ({ cats, createCat }) => (
  <div>
    <ul>
      {cats.map(c => <CatsListItem key={c.id} cat={c} />)}
    </ul>

    <CatsForm createCat={createCat}/>
  </div>
);

export default CatsList;
