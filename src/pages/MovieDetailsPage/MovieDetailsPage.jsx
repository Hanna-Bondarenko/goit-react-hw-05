import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams(); // Отримуємо movieId з URL
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const [error, setError] = useState(null);
  const backLinkRef = useRef(location.state ?? "/movies");

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovies() {
      try {
        const data = await fetchMovieDetails(movieId); // Використовуємо movieId
        setMovie(data);
      } catch (error) {
        setError(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      <Link to={backLinkRef.current}>Go back</Link>
      <h1>{movie.title}</h1>
      {error && <p>{error.message}</p>}
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        alt={movie.title}
        width={250}
      />
      <p>{movie.overview}</p>
      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
