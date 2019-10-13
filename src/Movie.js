import React, {Component} from 'react';
import "./Movie.css";

class Movie extends Component {
  state = {
    id: '',
    year: '',
    title: '',
    summary: '',
    poster: '',

  };
  render() {
    const { title, year, summary, poster, genres } = this.props;
    return (
      <div className="movie">
        <img src={ poster } alt={ title } title={ title }/>
        <div className="movie__data">
          <h3 className="movie__title">{ title }</h3>
          <h5 className="movie__year">{ year }</h5>
          <ul>
            {genres.map((genre, key)=> {
              return <li className="movie__genre" key={ key }>{genre}</li>
            })}
          </ul>
          <p className="movie__summary">{ summary.slice(0, 180) }...</p>
        </div>
      </div>
    );
  }
}

export default Movie;