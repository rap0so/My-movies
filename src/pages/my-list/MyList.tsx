import { Box, Flex } from '@chakra-ui/react';
import { getAllMyList } from 'localStorage';
import Gallery from 'components/Gallery';

const MyList = () => {
  const allStoragedMovies = getAllMyList();
  const allMovies = Object.values(allStoragedMovies);

  return (
    <>
      <Box ml="55px" mt="20">
        <Flex flexWrap="wrap" maxW="container.xl" pb="28">
          <Gallery title="My movies ❤️" movies={allMovies} />
        </Flex>
      </Box>
    </>
  );
};

export default MyList;
