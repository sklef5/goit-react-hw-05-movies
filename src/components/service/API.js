import axios from 'axios';

const API_KEY = 'c0374a2201c609381a9f6560041cb206';

export const PATH = {
  GET_TREND: '/trending/movie/day',
  FIND_MOVIE: '/search/movie',
  GET_INFO_MOVIE: '/movie/',
  GET_ACTORS: '/movies/get-movie-credits',
  GET_REVIEW: '/movies/get-movie-reviews',
};

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const searchMovieApi = (path, page) => {
  return axios
    .get(path, {
      params: {
        api_key: API_KEY,
        page: page,
      },
    })
    .then(res => res.data);
};

export async function getTrends() {
  return await axios
    .get(PATH.GET_TREND, {
      params: {
        api_key: API_KEY,
        page: 1,
      },
    })
    .then(res => res.data.results);
}

export async function findMovies(query) {
  return await axios
    .get(PATH.FIND_MOVIE, {
      params: {
        api_key: API_KEY,
        query,
      },
    })
    .then(res => res.data.results);
}

export async function findMovie(id) {
  return await axios
    .get(`${PATH.GET_INFO_MOVIE}${id}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
}
export async function getCast(path, id) {
  return await axios
    .get(`${PATH.GET_INFO_MOVIE}${id}/${path}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .then(res => res.data);
}