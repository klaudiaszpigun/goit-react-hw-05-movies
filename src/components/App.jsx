import { lazy, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { Movies } from './Movies';

const Home = lazy(() => import('./Home'));

export const App = () => {
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

      <Suspense fallback={<div>Loading</div>}>
        <Routes>
          <Route path="" />
        </Routes>
      </Suspense>
    </>
  );
};
