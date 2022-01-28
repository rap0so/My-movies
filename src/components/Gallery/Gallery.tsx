import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import Card from 'components/Card';

import { TGalleryProps } from './types';

const Gallery: FC<TGalleryProps> = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <Box key={movie.id} mb="10">
        <Card {...movie} />
      </Box>
    ))}
  </>
);

export default Gallery;
