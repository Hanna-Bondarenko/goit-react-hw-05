import { useEffect, useState } from "react";
import { fetchMovieCredits } from "../../services/api";
import { useParams } from "react-router-dom";
import styles from "./MovieCast.module.css";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const defaultImg = "https://via.placeholder.com/150";

  useEffect(() => {
    if (!movieId) return;

    async function fetchCast() {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      }
    }
    fetchCast();
  }, [movieId]);

  if (!cast.length)
    return <div className={styles.noCast}>No cast available</div>;

  return (
    <ul className={styles.castList}>
      {error && <p className={styles.error}>{error.message}</p>}

      {cast.map((actor) => (
        <li key={actor.id} className={styles.castItem}>
          <img
            className={styles.castImage}
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : defaultImg
            }
            alt={actor.name}
          />
          <p className={styles.actorName}>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
