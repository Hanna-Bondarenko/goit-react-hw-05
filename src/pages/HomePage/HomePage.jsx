import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";

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
    <>
      <Section>
        <Container>
          <h2>Trending Movies</h2>
          {error && <p>{error}</p>}
          <MovieList movies={movies} />
        </Container>
      </Section>
    </>
  );
};
