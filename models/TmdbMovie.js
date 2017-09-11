import { List, Map } from 'immutable';
import config from '../config';

/**
 * The Image URL for TMDB
 */
const TMDB_IMAGE_URL = config.TMDB_IMAGE_URL;

/**
 * Returns the image url
 * @param {String} imagePath The image path provided by TMDB
 */
const getImageURLForMovie = imagePath => `${TMDB_IMAGE_URL}${imagePath}`;

/**
 * Returns the parsed movie Map
 * @param {Object} movieParams The movie params provided by TMDB
 */
export const parseMovie = movieParams => Map({
  id: movieParams.id,
  title: movieParams.title,
  posterImageUrl: getImageURLForMovie(movieParams.poster_path),
});

/**
 * Returns the Immutable List of movies parsed
 * @param {Object} moviesParams A raw array of movies that will be parsed
 */
export const parseListMovies = (moviesParams) => {
  // Getting an array of movies parsed
  const moviesArray = moviesParams.map(movieParam => parseMovie(movieParam));
  // Transforming the array to a Immutable List
  const moviesList = List(moviesArray);
  return moviesList;
};
