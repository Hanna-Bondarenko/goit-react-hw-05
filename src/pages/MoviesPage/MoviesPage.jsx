import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      try {
        const data = await fetchMoviesByQuery();
        setMovies(data.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleSubmit} />
      {error && <p>{error.message}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
