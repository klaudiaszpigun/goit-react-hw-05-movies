import { details } from 'Api';
import { Suspense, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Cast from './Cast';
import Reviews from './Reviews';
const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [detailsObject, setDetailsObject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieDetails = await details(id);
        setDetailsObject(movieDetails);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [id]);

  const defaultImg =
    'https://t3.ftcdn.net/jpg/05/65/84/38/360_F_565843812_cBZocRJmgxP7NgHRZvOO27nYX20Lx5bz.jpg';

  const handleClick = () => {
    navigate('/');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <button type="button" onClick={handleClick}>
          Go back
        </button>
      </div>
      <div>
        <img
          src={
            detailsObject.poster_path
              ? `https://image.tmdb.org/t/p/w342${detailsObject.poster_path}`
              : defaultImg
          }
          alt="poster"
        />
        <h2>{detailsObject.title}</h2>
        <p>User score: {detailsObject.vote_average}</p>
        <h3>Overview</h3>
        <p>{detailsObject.overview}</p>
        <h3>Genres</h3>
        <ul>
          {detailsObject.genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <Suspense fallback={<div>Loading Cast and Reviews...</div>}>
        <Cast />
        <Reviews />
      </Suspense>
    </>
  );
};
export default MovieDetails;
