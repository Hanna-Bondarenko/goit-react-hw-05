import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMoviesByQuery } from "../../services/api";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";
import { Loader } from "../../components/Loader/Loader";

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Додаємо стан для керування завантаженням

  useEffect(() => {
    if (!query) return;

    async function fetchMovies() {
      setIsLoading(true); // Вмикаємо Loader перед запитом
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // Вимикаємо Loader після завершення запиту
      }
    }
    fetchMovies();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <SearchForm onSubmit={handleSubmit} />
      {isLoading && <Loader />} {/* Відображаємо Loader, коли isLoading true */}
      {error && <p>{error.message}</p>}
      {!isLoading && <MovieList movies={movies} />}{" "}
      {/* Відображаємо список, коли завантаження завершено */}
    </div>
  );
};

export default MoviesPage;
