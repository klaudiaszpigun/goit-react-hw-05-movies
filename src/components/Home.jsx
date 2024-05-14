import { trending } from 'Api';
import { lazy, Suspense } from 'react';
import { Link, NavLink, Route, Routes } from 'react-router-dom';

const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export const Home = () => {
  const trendingMovies = trending();

  return (
    <>
      <div>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </div>

      <div>
        <h1>Trending today:</h1>
        <ul>
          {trendingMovies.map(movie => {
            return (
              <li>
                <Link to={`./movie/:{movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Suspense fallback={<div>Loading famous movies...</div>}>
        <Routes>
          <Route path="movies/:movie_id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>

      <Suspense fallback={<div>Loading searchbar...</div>}>
        <Routes>
          <Route path="/movies" element={<Movies />}>
            <Route path=":movie_id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
