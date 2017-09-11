import express from 'express';
import { getMovies } from '../services/Movies';

// Getting router
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  const moviesData = getMovies();
  const moviesTitles = moviesData.map(movieData => movieData.title);

  res.render('index', { title: moviesTitles });
});

export default router;
