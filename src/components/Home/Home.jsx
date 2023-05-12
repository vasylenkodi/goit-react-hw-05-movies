import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29';

const Home = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setFilms(data.results));
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={{from: location.pathname}} >{film.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
