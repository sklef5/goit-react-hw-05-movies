import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../service/API';

const Cast = () => {
  const { cast, movieId } = useParams();
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getCast('credits',movieId)
      .then(res => setCasts(res.cast))
      .catch(e => console.log(e));
  }, [cast, movieId]);

  return (
    <ul>
      {casts.map(({ profile_path, name, character, id }) => (
        <li key={id}>
          {profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w185${profile_path}`}
              alt={name}
            />
          )}
          <p>{name}</p>
          {character && <p>Character: {character}</p>}
        </li>
      ))}
    </ul>
  );
};

export default Cast;
