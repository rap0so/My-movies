import { TTMDBResponse } from 'api/types';
import parseDataToGallery from './parseDataToGallery';

const fakeApiData: TTMDBResponse = {
  page: 1,
  results: [
    {
      id: 123,
      overview: 'A movie that is definitively amazing',
      poster_path: '/amazingmovie.jpg',
      title: 'An amazing movie',
    },
    {
      id: 23,
      overview: 'A movie that is definitively more amazing than the first one',
      poster_path: '/anotheramazingmovie.jpg',
      title: 'An amazing movie 2',
    },
  ],
  total_pages: 1,
};

describe('parseDataToGallery', () => {
  it('should return empty array when NO data received', () => {
    const result = parseDataToGallery();

    expect(result).toEqual([]);
  });

  it('should parse when data received', () => {
    const result = parseDataToGallery(fakeApiData);

    expect(result).toEqual([
      {
        description: 'A movie that is definitively amazing',
        id: 123,
        poster: 'https://image.tmdb.org/t/p/w500//amazingmovie.jpg',
        title: 'An amazing movie',
      },
      {
        description:
          'A movie that is definitively more amazing than the first one',
        id: 23,
        poster: 'https://image.tmdb.org/t/p/w500//anotheramazingmovie.jpg',
        title: 'An amazing movie 2',
      },
    ]);
  });
});
