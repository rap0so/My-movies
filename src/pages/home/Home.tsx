import { Box } from '@chakra-ui/react';

import SliderMovies from 'sections/SliderMovies';

import sections from './sections';

const Home = () => (
  <Box pl={['10', '20']} mt={['10', '20']}>
    {sections.map(({ title, method }, index) => (
      <SliderMovies title={title} method={method} key={index} />
    ))}
  </Box>
);

export default Home;
