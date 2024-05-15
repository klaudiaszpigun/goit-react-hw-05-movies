import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
export const SharedLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/" end="true">
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
