import { useEffect, useState } from "react";

import { fetchMovieCredits } from "../../services/api";
import { useParams } from "react-router-dom";

export const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

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

  if (!cast.length) return <div>No cast available</div>;

  return (
    <ul>
      {error && <p>{error.message}</p>}
      {cast.map((actor) => (
        <li key={actor.id}>{actor.name}</li>
      ))}
    </ul>
  );
};
