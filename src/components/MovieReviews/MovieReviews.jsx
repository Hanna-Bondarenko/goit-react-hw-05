import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    async function fetchReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  if (!reviews.length) return <p>No reviews available</p>;

  return (
    <ul>
      {error && <p>{error.message}</p>}
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
