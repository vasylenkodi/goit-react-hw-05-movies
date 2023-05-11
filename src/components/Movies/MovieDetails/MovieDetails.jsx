import { Link, useParams, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const PARAMS = 'api_key=959330b1b48c95e1fde96a992bbede29&language=en-US';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}${movieId}?${PARAMS}`)
      .then(response => response.json())
      .then(data => setFilm(data));
  }, []);

  return (
    film && (
      <div>
              <section>
                <Link>Go back</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt=""
          />
          <h1>
            {film.title} ({film.release_date.slice(0, 4)})
          </h1>
          <p>User Score: {film.vote_count}%</p>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <h2>Genres</h2>
          <ul>
            {film.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Additional information</h2>
          <ul>
            <li>
              <Link to="cast" state={{ from: movieId }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: movieId }}>
                Reviews
              </Link>
            </li>
          </ul>
        </section>
        <Outlet />
      </div>
    )
  );
};

export default MovieDetails;
