import { useState } from 'react';
import { SearchedMovies } from '../components/SearchedMovies';
const Movies = () => {
  const [temporaryQuery, setTemporaryQuery] = useState('');
  const [query, setQuery] = useState('');
  const handleClick = event => {
    event.preventDefault();
    setQuery(temporaryQuery);
  };
  return (
    <div>
      <input
        type="text"
        onChange={event => setTemporaryQuery(event.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        search
      </button>

      <SearchedMovies query={query} />
    </div>
  );
};
export default Movies;
