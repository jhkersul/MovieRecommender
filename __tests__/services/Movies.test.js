import { getMovieTmdbId } from '../../services/Movies';

test('Tmdb id for movie id = 2 must be 8844', () => {
  expect(getMovieTmdbId(2)).toBe(8844);
});

test('Tmdb id for movie id = abc must be null', () => {
  expect(getMovieTmdbId('abc')).toBe(null);
});
