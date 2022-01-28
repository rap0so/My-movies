import { TTMDBResponse } from 'api/types';
import createImagePath from 'helpers/createImagePath';
import { TMovie } from 'types';

const parseDataToGallery = (data?: TTMDBResponse): TMovie[] => {
  if (!data) {
    return [];
  }

  return data.results.map(({ id, poster_path, title, overview }) => ({
    id,
    title,
    description: overview,
    poster: createImagePath(poster_path),
  }));
};

export default parseDataToGallery;
