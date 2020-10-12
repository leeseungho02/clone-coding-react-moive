import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, year, title, summary, poster, genres }) {
    return (
        <Link
            className="col-lg-3 col-md-6"
            to={{
                pathname: `/movie/${id}`,
                state: {
                    year,
                    title,
                    summary,
                    poster,
                    genres
                }
            }}
        >
            <div className="movie mb-5 shadow-sm">
                <div className="movie__poster">
                    <img src={poster} alt={title} title={title} />
                </div>
                <div className="movie__data p-3">
                    <div className="movie__title">{title}</div>
                    <p className="movie__summary text-break">{summary}</p>
                    <ul className="genres d-flex flex-wrap">
                        {genres.map((genre, index) => <li key={index} className="genres_genre mr-3">{genre}</li>)}
                    </ul>
                    <div className="movie__year">{year}</div>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;