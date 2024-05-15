import { search } from 'Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchedMovies = ({ query }) => {
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    const fetchSearchedMovies = async () => {
      const movies = await search(query);
      setSearched(movies);
    };

    fetchSearchedMovies();
  }, [query]);

  return (
    <ul>
      {searched.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: '/movies' }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
