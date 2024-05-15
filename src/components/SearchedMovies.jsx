import { search } from 'Api';
import { Link } from 'react-router-dom';
export const SearchedMovies = async ({ query }) => {
  const searched = await search(query);
  return (
    <div>
      <ul>
        {searched.map(movie => {
          return (
            <li>
              <Link to={`/movies/${movie.id}`} state={{ id: movie.id }}>
                {movie.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
