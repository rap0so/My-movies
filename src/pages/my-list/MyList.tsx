import { Box, Flex } from '@chakra-ui/react';
import { getAllMyList } from 'localStorage';
import Gallery from 'components/Gallery';
import Title from 'components/Title';

const MyList = () => {
  const allStoragedMovies = getAllMyList();
  const allMovies = Object.values(allStoragedMovies);

  return (
    <>
      <Box px={['0', '20']} mt={['10', '20']}>
        <Title mb="10" textAlign={['center', 'left']}>
          My list of movies 🎬
        </Title>
        <Flex
          flexWrap="wrap"
          pb="28"
          justifyContent={['space-around', 'flex-start']}
        >
          <Gallery movies={allMovies} />
        </Flex>
      </Box>
    </>
  );
};

export default MyList;
