import { trending } from 'Api';
import { Link } from 'react-router-dom';
export const Home = () => {
  const trendingMovies = trending();
  return (
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
  );
};
