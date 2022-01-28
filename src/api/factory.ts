import axios from 'axios';

const apiKey = process.env.REACT_APP_TMDB_APIKEY;

const factory = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-type': 'application/json',
  },
  params: {
    api_key: apiKey,
  },
});

export default factory;
