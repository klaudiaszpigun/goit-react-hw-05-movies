import { credits } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const { id } = useParams(); // dziala
  const [cast, setCast] = useState([]); // nie dziala
  const [isLoading, setIsLoading] = useState(true);
  console.log(id);

  useEffect(() => {
    const fetchingCast = async () => {
      try {
        const fetched = await credits(id);
        setCast(fetched.cast);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setIsLoading(false);
      }
    };

    fetchingCast();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!cast) {
    return <div>Loading...</div>;
  }
  return (
    <ul>
      {cast.length > 0 ? (
        cast.map(actor => (
          <li key={actor.id}>
            <p>{actor.name}</p>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <p>No image available</p>
            )}
            <p>Character: {actor.character}</p>
          </li>
        ))
      ) : (
        <li>No cast available</li>
      )}
    </ul>
  );
};
export default Cast;
