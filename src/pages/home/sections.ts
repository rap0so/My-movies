import { getMoviesByCategory } from 'api';

const sections = [
  {
    method: { action: getMoviesByCategory('upcoming'), name: 'getUpcoming' },
    title: 'The Best of Upcoming',
  },
  {
    method: { action: getMoviesByCategory('top_rated'), name: 'getTopRated' },
    title: 'Top Rated',
  },
  {
    method: { action: getMoviesByCategory('popular'), name: 'getPopular' },
    title: 'Everybody is talking about',
  },
];

export default sections;
