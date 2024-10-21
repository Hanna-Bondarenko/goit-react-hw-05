import axios from "axios";

const API_URL = "https://api.themoviedb.org/3";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmYyOGQ5NjdjOThmNjE5YmMyNmRhMzg2N2FhNDQ5YSIsIm5iZiI6MTcyOTQ5MjcyNi42ODY3MzUsInN1YiI6IjY3MTNmMGNlMGNiNjI1MmY5OTA4NmVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RS-hjbFsQT8JOhfDJIpmPdcLA2f8du1vC1-QaYmsG5A";

// Додаємо 'Bearer ' перед токеном
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;

// Запит на отримання популярних фільмів
export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/trending/movie/day`);
    return response.data;
  } catch (error) {
    console.error("Error fetching trending movies:", error);
    throw error;
  }
};

// Запит на пошук фільмів за ключовим словом
export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/movie`, {
      params: { query, include_adult: false, language: "en-US", page: 1 },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching movies for query "${query}":`, error);
    throw error;
  }
};

// Запит на отримання деталей фільму
export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(
      `Error fetching movie details for movieId "${movieId}":`,
      error
    );
    throw error;
  }
};

// Запит на отримання акторського складу фільму
export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/credits`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching credits for movieId "${movieId}":`, error);
    throw error;
  }
};

// Запит на отримання оглядів фільму
export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(`${API_URL}/movie/${movieId}/reviews`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching reviews for movieId "${movieId}":`, error);
    throw error;
  }
};
