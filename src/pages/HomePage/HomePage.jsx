import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};
