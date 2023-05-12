import { NavLink, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './SharedLayout/SharedLayout';

const Home = lazy(() => import('./Home/Home'));
const Movies = lazy(() => import('./Movies/Movies'));
const MovieDetails = lazy(() => import('./Movies/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Movies/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('./Movies/MovieDetails/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
