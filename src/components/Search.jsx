import { useState } from 'react';
import { SearchedMovies } from './SearchedMovies';
export const Search = ({ children }) => {
  const [temporaryQuery, setTemporaryQuery] = useState('');
  const [query, setQuery] = useState('');
  return (
    <>
      <form onSubmit={() => setQuery(temporaryQuery)}>
        <input
          type="text"
          onChange={event => setTemporaryQuery(event.target.value)}
        />
        <button type="submit">search</button>
      </form>
      <SearchedMovies query={query} />
    </>
  );
};
