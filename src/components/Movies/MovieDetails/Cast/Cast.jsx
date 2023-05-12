import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const PARAMS =
  '/credits?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US';

const Cast = () => {
  const [cast, setCast] = useState(null);

  const location = useLocation();
  const path = location.pathname;
  const movieId = path.slice(8, path.length - 5);

  useEffect(() => {
    fetch(`${BASE_URL}${movieId}${PARAMS}`)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, []);


  return (
    cast && (
      <section>
        <ul>
          {cast.map(actor => {
            const imagePath = actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : '../../../../images/no_img.jpeg';
            return (
              <li key={actor.id}>
                <img src={imagePath} alt="" />
                <h2>{actor.name}</h2>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      </section>
    )
  );
};

export default Cast;
