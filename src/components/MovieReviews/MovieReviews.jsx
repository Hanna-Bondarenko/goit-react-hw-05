import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import styles from "./MovieReviews.module.css";

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
    <ul className={styles.reviewsList}>
      {error && <p>{error.message}</p>}
      {reviews.map((review) => (
        <li key={review.id} className={styles.reviewItem}>
          <h3 className={styles.author}>{review.author}</h3>
          <p className={styles.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
export default MovieReviews;
