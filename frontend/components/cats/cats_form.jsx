import React from 'react';

class CatsForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Gizmo',
      favorite_song: 'Desafinado',
      is_liked: true,
    };

    // autobinding.
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleFavoriteSongChange = this.handleFavoriteSongChange.bind(this)
    this.handleIsLikedChange = this.handleIsLikedChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleFavoriteSongChange(e) {
    this.setState({ favorite_song: e.target.value });
  }

  handleIsLikedChange(e) {
    this.setState({ is_liked: e.target.checked });
  }

  handleSubmit(e) {
    e.preventDefault();

    // create my new cat.
    const newCat = Object.assign({}, this.state);
    newCat.id = new Date().getTime();
    console.log(newCat);
    this.props.createCat(newCat);
  }

  render() {
    // name
    // favorite_song
    // is_liked

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create a new cat!</h3>
        <label>
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}/>
        </label>

        <label>
          Favorite Song
          <input
            type="text"
            value={this.state.favorite_song}
            onChange={this.handleFavoriteSongChange}/>
        </label>

        <label>
          isLiked
          <input
            type="checkbox"
            checked={this.state.is_liked}
            onChange={this.handleIsLikedChange}/>
        </label>

        <button>Create cat!</button>
      </form>
    );
  }
}

export default CatsForm;
