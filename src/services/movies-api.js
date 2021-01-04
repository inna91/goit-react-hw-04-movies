// import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8a4e9a4eeaf4285d40f744310e45ba5e';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.params = { api_key: API_KEY, language: 'en-EN' };

// export async function fetchTrendingMovies(page = 1) {
//   const {
//     data: { results },
//   } = await axios.get(`/trending/movie/day?page=${page}`);
//   return results;
// }

// export default function fetchMoviesBySearch(query, page = 1) {
//   return axios
//     .get(`/search/movie?query=${query}&page=${page}`)
//     .then(response => response.data.results);
// }

// export async function fetchMovieDetails(movieId) {
//   const { data } = await axios.get(`/movie/${movieId}`);
//   return data;
// }

// export async function fetchMovieCredits(movieId) {
//   const {
//     data: { cast },
//   } = await axios.get(`/movie/${movieId}/credits`);
//   return cast;
// }

// export async function fetchMovieReviews(movieId) {
//   const {
//     data: { results },
//   } = await axios.get(`/movie/${movieId}/reviews`);

//   return results;
// }

// const fetchTrendingMovies = async (page = 1) => {
//   const { data } = await axios.get(`/trending/movie/day?page=${page}`);
//   return data;
// };

// const fetchMoviesBySearch = async (search, page = 1) => {
//   const { data } = await axios.get(
//     `/search/movie?page=${page}&include_adult=false&query=${search}`,
//   );
//   return data;
// };

// const fetchMovieDetails = async movie_id => {
//   const { data } = await axios.get(`/movie/${movie_id}`);
//   return data;
// };

// const fetchMovieCredits = async movie_id => {
//   const { data } = await axios.get(`/movie/${movie_id}/credits`);
//   return data;
// };

// const fetchMovieReview = async (movie_id, page = 1) => {
//   const { data } = await axios.get(`/movie/${movie_id}/reviews?page=${page}`);
//   return data;
// };

// export {
//   fetchTrendingMovies,
//   fetchMoviesBySearch,
//   fetchMovieDetails,
//   fetchMovieCredits,
//   fetchMovieReview,
// };

async function moviesApi(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('404 The page is not found'));
}

export function fetchTrendingMovies() {
  return moviesApi(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMoviesBySearch(query, page) {
  return moviesApi(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`,
  );
}

export function fetchMovieDetails(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
}

export function fetchMovieReview(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
}

export function fetchMovieCredits(movieId) {
  return moviesApi(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
}
