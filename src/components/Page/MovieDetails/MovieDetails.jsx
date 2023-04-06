import { useEffect, useState } from 'react';
import { useParams, Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { findMovie } from '../../service/API';
import {Wrapper, Img, Title, Title2, Desc, Button} from './MovieDetails.styled'

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    findMovie(movieId).then(res => setMovie(res));
  }, [movieId]);


  const goBack = () => {
      const prevPageLocation = location.state;
      navigate(prevPageLocation);
  }

  return (
    <>
    <Button type="button" onClick={goBack}>Go back</Button>
      <Wrapper>
        <Img
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt={movie.tagline}
        />

        <div>
          <Title>{movie.title}</Title>
          <Title2>UserScore:</Title2> <Desc >{Math.floor(movie.vote_average)}/10</Desc>
          <Title2>Overview:</Title2> <Desc >{movie.overview}</Desc>
          <Title2>Genres</Title2>
          {<Desc>{movie.genres?.map(genre => `${genre.name}  `)}</Desc>}
        </div>
      </Wrapper>

      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to='cast' state={location.state}>Cast</Link>
        </li>
        <li key="reviews">
          <Link to="reviews" state={location.state}>Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </>
  );
};
export default MovieDetails;
