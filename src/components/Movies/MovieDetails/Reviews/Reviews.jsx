import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const PARAMS =
  '/reviews?api_key=959330b1b48c95e1fde96a992bbede29&language=en-US&page=1';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const location = useLocation();

  const path = location.pathname;
  const movieId = path.slice(8, path.length - 8);

  useEffect(() => {
    fetch(`${BASE_URL}${movieId}${PARAMS}`)
      .then(response => response.json())
      .then(data => setReviews(data.results));
  }, []);

  return (
    reviews && (
      <section>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>Author: {review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  );
};

export default Reviews;
