import { details } from 'Api';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailsObject, setDetailsObject] = useState(null);
  console.log(id);
  console.log(detailsObject);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await details(id);
      setDetailsObject(movieDetails);
    };

    fetchMovieDetails();
  }, [id]);

  console.log(detailsObject);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  if (!detailsObject) {
    return <div>Loading...</div>;
  }
  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleClick}>
          Go back
        </button>
      </div>
      <div>
        <img src={detailsObject.poster_path ?? defaultImg} alt="poster" />
        <h2>{detailsObject.title}</h2>
        <p>User score: {detailsObject.popularity?.slice(0, 3)}</p>
        <h3>Overview</h3>
        <p>{detailsObject.overview}</p>
        <h3>Genres</h3>
        <ul>
          {detailsObject.genres.map(genre => (
            <li key={genre.id}>
              <p>{genre.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
};
