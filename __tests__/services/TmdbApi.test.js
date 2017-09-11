import { getMovieById } from '../../services/TmdbApi';

test('Movie info must be snapshot', () => {
  expect.assertions(1);
  return getMovieById(8844).then((response) => {
    expect(response).toMatchSnapshot();
  });
});

test('Movie dont exist, expect rejection', () => {
  expect.assertions(1);
  return getMovieById(999999999).catch((error) => {
    expect(error).toBe(error);
  });
});

test('Movie string id dont exist, expect rejection', () => {
  expect.assertions(1);
  return getMovieById('asdasd').catch((error) => {
    expect(error).toBe(error);
  });
});
