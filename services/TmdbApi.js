import config from '../config';
import { request, GET } from './Network';
import { parseMovie } from '../models/TmdbMovie';

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
      .then((response) => {
        // If the response has a status_code, it means it's an error
        if (response.status_code) {
          reject(response);
          return;
        }
        // Parsing the response to a tmdbMovie
        const tmdbMovie = parseMovie(response);
        resolve(tmdbMovie);
      })
      .catch(error => reject(error));
  })
);
