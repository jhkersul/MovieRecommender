import { parseMovie, parseListMovies } from '../../models/TmdbMovie';


test('The parsed movie must be the snapshot', () => {
  const movie = { id: 1, title: 'Test', poster_path: '/123' };

  expect(parseMovie(movie)).toMatchSnapshot();
});


test('should parse the snapshot', () => {
  const moviesParams = [
    { id: 1, title: 'Test', poster_path: '/123' },
    { id: 2, title: 'Test 2', poster_path: '/123' },
  ];
  // Parsing list
  const listMovies = parseListMovies(moviesParams);

  expect.assertions(2);
  expect(listMovies.get(0)).toMatchSnapshot();
  expect(listMovies.get(1)).toMatchSnapshot();
});
