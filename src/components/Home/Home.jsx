import { useState, useEffect } from "react";

const URL =
  'https://api.themoviedb.org/3/trending/movie/day?api_key=959330b1b48c95e1fde96a992bbede29';

const Home = () => {
    const [films, setFilms] = useState([]);

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
            <li key={film.id}>{film.title}</li>
          ))}
        </ul>
      </div>
    );
}

export default Home;