import { trending } from 'Api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await trending();
      const filteredMovies = movies.filter(movie => movie.title);
      setTrendingMovies(filteredMovies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h1>Trending today:</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
