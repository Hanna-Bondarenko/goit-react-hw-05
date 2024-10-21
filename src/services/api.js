import axios from "axios";

// Базова URL-адреса для API
const API_BASE_URL = "https://api.themoviedb.org/3/";
//  API Read Access Token
const API_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmYyOGQ5NjdjOThmNjE5YmMyNmRhMzg2N2FhNDQ5YSIsIm5iZiI6MTcyOTQ5MjcyNi42ODY3MzUsInN1YiI6IjY3MTNmMGNlMGNiNjI1MmY5OTA4NmVlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RS-hjbFsQT8JOhfDJIpmPdcLA2f8du1vC1-QaYmsG5A";
// Базовий URL для зображень
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// Налаштування заголовків для кожного запиту
const options = {
  headers: {
    Authorization: API_TOKEN,
  },
};

// Функція для отримання популярних фільмів (для головної сторінки)
export const fetchPopularMovies = async () => {
  const url = `${API_BASE_URL}movie/popular?language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    throw error;
  }
};

// Функція для пошуку фільмів (сторінка MoviesPage)
export const searchMovies = async (query) => {
  const url = `${API_BASE_URL}search/movie?query=${query}&language=en-US&page=1&include_adult=false`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

// Функція для отримання деталей фільму за ID (сторінка MovieDetailsPage)
export const fetchMovieDetails = async (movieId) => {
  const url = `${API_BASE_URL}movie/${movieId}?language=en-US`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error;
  }
};

// Функція для отримання акторського складу фільму (компонент MovieCast)
export const fetchMovieCast = async (movieId) => {
  const url = `${API_BASE_URL}movie/${movieId}/credits`;
  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error;
  }
};

// Функція для отримання оглядів фільму (компонент MovieReviews)
export const fetchMovieReviews = async (movieId) => {
  const url = `${API_BASE_URL}movie/${movieId}/reviews`;
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error;
  }
};

// Функція для отримання повної URL-адреси зображення (наприклад, для постера фільму)
export const getImageUrl = (path) => {
  return `${IMAGE_BASE_URL}${path}`;
};
