import config from '../config';
import { request, GET } from './Network';

/**
 * The TMDB API Key from config file
 */
export const TMDB_API_KEY = config.TMDB_API_V3_KEY;

/**
 * The URL from TMDB APi
 */
export const API_TMDB_URL = config.API_TMDB_URL;

export const getMovieById = tmdbId => (
  new Promise((resolve, reject) => {
    if (typeof tmdbId === 'undefined' || tmdbId === null) reject('Invalid tmdbId.');

    const params = {
      api_key: TMDB_API_KEY,
    };

    request(GET, `${API_TMDB_URL}/movie/${tmdbId}`, params)
      .then(response => resolve(response))
      .catch(error => reject(error));
  })
);

