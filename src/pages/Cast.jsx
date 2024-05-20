import { credits } from 'Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchingCast = async () => {
      try {
        const fetched = await credits(id);
        setCast(fetched);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(true);
      }
    };

    fetchingCast();
  }, [id]);

  if (loading) {
    <div>Loading...</div>;
  }
  if (!cast) {
    return <div>There's no data</div>;
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
