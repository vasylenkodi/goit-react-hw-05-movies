import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const BASE_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US&page=1&include_adult=false&query=';

const Movies = () => {
  const [title, setTitle] = useState('');
  const [films, setFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const inputChangeHandler = event => {
    setTitle(event.target.value);
  };

  useEffect(() => {
    console.log(searchParams.get('query'));
    searchParams.get('query') &&
      fetch(`${BASE_URL}${searchParams.get('query')}`)
        .then(response => response.json())
        .then(data => setFilms(data.results));
  }, [searchParams]);

  const submitHandler = event => {
    event.preventDefault();
    setSearchParams({ query: title });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" value={title} onChange={inputChangeHandler} />
      </form>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            {' '}
            <Link to={`/movies/${film.id}`}>{film.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
