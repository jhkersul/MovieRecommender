import moviesData from '../data/movies.json';
import linksData from '../data/links.json';

/**
 * Returns the movies data
 */
export const getMovies = () => moviesData;

/**
 * Returns the links data
 */
export const getLinks = () => linksData;

/**
 * Returns the The Movie Database ID from a movie
 * @param {Number} movieID The current movieID to get the TmdbId
 */
export const getMovieTmdbId = (movieID) => {
  // Filtering by movieId
  const filteredItems = getLinks().filter(link => link.movieId === movieID);
  // Checking if the filter found any item
  if (filteredItems.length > 0) {
    // Returning the tmdbId
    const tmdbId = filteredItems[0].tmdbId;
    return tmdbId;
  }
  return null;
};
