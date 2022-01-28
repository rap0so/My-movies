import { Box, Flex } from '@chakra-ui/react';
import { getAllMyList } from 'localStorage';
import Gallery from 'components/Gallery';
import Title from 'components/Title';

const MyList = () => {
  const allStoragedMovies = getAllMyList();
  const allMovies = Object.values(allStoragedMovies);

  return (
    <>
      <Box px={['10', '20']} mt={['10', '20']}>
        <Title mb="10" textAlign={['center', 'left']}>
          My movies ❤️
        </Title>
        <Flex
          flexWrap="wrap"
          maxW="container.xl"
          pb="28"
          justifyContent={['center', 'flex-start']}
        >
          <Gallery movies={allMovies} />
        </Flex>
      </Box>
    </>
  );
};

export default MyList;
