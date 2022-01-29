import {
  getFavorite,
  setFavorite,
  removeFavorite,
  getMyList,
  getAllMyList,
  setMyList,
  removeMyList,
} from './';

const fakeMovie = {
  description: 'The title says for itself',
  id: 123,
  poster: 'https://via.placeholder.com/150',
  title: 'Fantastic movie',
};

describe('Favorite', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should save a movie', () => {
    setFavorite(fakeMovie);

    const expectation = JSON.stringify({
      123: fakeMovie,
    });

    expect(localStorage.__STORE__.favoriteMovies).toEqual(expectation);
  });

  it('should return undefined when id was NOT found', () => {
    setFavorite(fakeMovie);
    const foundMovie = getFavorite(332123123);

    expect(foundMovie).toBeUndefined();
  });

  it('should get a movie by id', () => {
    setFavorite(fakeMovie);
    const foundMovie = getFavorite(fakeMovie.id);

    expect(foundMovie).toEqual(fakeMovie);
  });

  it('should remove a movie by id', () => {
    setFavorite(fakeMovie);

    expect(getFavorite(fakeMovie.id)).not.toBeUndefined();
    const onLocalStorage = JSON.parse(localStorage.__STORE__.favoriteMovies);
    const savedFakeMovie = onLocalStorage[123];

    expect(savedFakeMovie).toEqual(fakeMovie);

    removeFavorite(fakeMovie.id);

    expect(getFavorite(fakeMovie.id)).toBeUndefined();
    expect(localStorage.__STORE__.favoriteMovies).toBe('{}');
  });
});

describe('My List', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should save a movie', () => {
    setMyList(fakeMovie);

    const expectation = JSON.stringify({
      123: fakeMovie,
    });

    expect(localStorage.__STORE__.myListMovies).toEqual(expectation);
  });

  it('should return undefined when id was NOT found', () => {
    setMyList(fakeMovie);
    const foundMovie = getMyList(332123123);

    expect(foundMovie).toBeUndefined();
  });

  it('should get a movie by id', () => {
    setMyList(fakeMovie);
    const foundMovie = getMyList(fakeMovie.id);

    expect(foundMovie).toEqual(fakeMovie);
  });

  it('should remove a movie by id', () => {
    setMyList(fakeMovie);

    expect(getMyList(fakeMovie.id)).not.toBeUndefined();
    const onLocalStorage = JSON.parse(localStorage.__STORE__.myListMovies);
    const savedFakeMovie = onLocalStorage[123];

    expect(savedFakeMovie).toEqual(fakeMovie);

    removeMyList(fakeMovie.id);

    expect(getMyList(fakeMovie.id)).toBeUndefined();
    expect(localStorage.__STORE__.myListMovies).toBe('{}');
  });

  it('should get all movies', () => {
    const anotherFakeMovie = {
      description:
        'Someone will begin as a looser and be a hero at the end of the movie',
      id: 236,
      poster: 'https://via.placeholder.com/200',
      title: 'Super movie',
    };
    setMyList(fakeMovie);
    setMyList(anotherFakeMovie);

    const allMovies = getAllMyList();
    const expectation = {
      [fakeMovie.id]: fakeMovie,
      [anotherFakeMovie.id]: anotherFakeMovie,
    };

    expect(localStorage.__STORE__.myListMovies).toEqual(
      JSON.stringify(expectation),
    );
    expect(allMovies).toEqual(expectation);
  });
});
