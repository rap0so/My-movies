import { Box, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { toast } from 'react-toastify';

import { IMAGERY_URL } from 'api/consts';
import Loading from 'components/Loading';
import Card from 'components/Card';
import Title from 'components/Title';

import { TSliderMoviesProps } from './types';
import sliderMoviesStyle from './SliderMovies.style';
import swiperConfigs from './swiperConfigs';

const SliderMovies: FC<TSliderMoviesProps> = ({
  title: sectionTitle,
  method,
  onAddToList,
  onAddToFavorite,
}) => {
  const { isLoading, data, error, fetchNextPage } = useInfiniteQuery(
    method.name,
    method.action,
    {
      getNextPageParam: (lastPage) => lastPage.page + 1,
      refetchOnWindowFocus: false,
    },
  );

  const onFetchNextPage = () => fetchNextPage();

  if (isLoading) {
    return (
      <Center py="200px" color="#fff">
        <Loading />
      </Center>
    );
  }

  if (error) {
    const humanizedError = error as Error;
    toast.error(humanizedError.message);

    return null;
  }

  return (
    <Box ml="20" sx={sliderMoviesStyle}>
      <Title>{sectionTitle}</Title>
      <Swiper {...swiperConfigs} onReachEnd={onFetchNextPage}>
        {data?.pages.map((group, index) => (
          <Box key={index}>
            {group.results.map(
              ({ backdrop_path, poster_path, title, overview, id }) => (
                <SwiperSlide key={id}>
                  <Card
                    backdrop={`${IMAGERY_URL}${backdrop_path}`}
                    poster={`${IMAGERY_URL}${poster_path}`}
                    title={title}
                    description={overview}
                    id={id}
                    onAddToList={onAddToList}
                    onAddToFavorite={onAddToFavorite}
                  />
                </SwiperSlide>
              ),
            )}
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderMovies;
