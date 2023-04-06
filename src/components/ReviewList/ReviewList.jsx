import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCast } from '../service/API';

const Review = () => {
  const { review, movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getCast('reviews', movieId)
      .then(res => setReviews(res.results))
      .catch(e => console.log(e));
  }, [review]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(({ author_details, author, content, id }) => (
            <li key={id}>
              {author_details.avatar_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w45${author_details.avatar_path}`}
                  alt={author}
                />
              )}
              <p>Author: {author}</p>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews for this movie yet.</p>
      )}
    </>
  );
};

export default Review;
