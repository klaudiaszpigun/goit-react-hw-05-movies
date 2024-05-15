import { details } from 'Api';
import { Outlet, useLocation } from 'react-router-dom';
export const MovieDetails = () => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  const location = useLocation();
  const id = location.state;
  const movieDetails = details(id);
  return (
    <>
      <div>
        <img src={movieDetails.poster_path ?? defaultImg} alt="poster" />
        <h2>{movieDetails.title}</h2>
        <p>User score: {movieDetails.popularity?.slice(0, 3)}</p>
        <h3>Overview</h3>
        <p>{movieDetails.outerview}</p>
        <h3>Genres</h3>
        <ul>
          {movieDetails.genres.map(genre => {
            return (
              <li>
                <p>{genre.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
