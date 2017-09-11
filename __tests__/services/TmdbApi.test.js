import { getMovieById } from '../../services/TmdbApi';


test('Movie info must be snapshot', () => {
  expect.assertions(1);
  return getMovieById(8844).then((response) => {
    expect(response).toMatchSnapshot();
  });
});

