import React from 'react';
import CatsForm from './cats_form';
import CatsListItem from './cats_list_item';

class CatsList extends React.Component {
  constructor(props) {
    super(props);

    // in case I wanted to add more.
  }

  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    const { cats, createCat } = this.props;
    return (
      <div>
        <ul>
          {cats.map(c => <CatsListItem key={c.id} cat={c} />)}
        </ul>

        <CatsForm createCat={createCat}/>
      </div>
    );
  }
}

export default CatsList;
