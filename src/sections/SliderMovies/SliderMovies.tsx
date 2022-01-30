import { Box, Center } from '@chakra-ui/react';
import { FC } from 'react';
import { useInfiniteQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';

import Loading from 'components/Loading';
import Card from 'components/Card';
import Title from 'components/Title';
import createImagePath from 'helpers/createImagePath';

import { TSliderMoviesProps } from './types';
import sliderMoviesStyle from './SliderMovies.style';
import swiperConfigs from './swiperConfigs';
import Error from 'components/Error';

const SliderMovies: FC<TSliderMoviesProps> = ({
  title: sectionTitle,
  method,
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
    return <Error error={error} />;
  }

  return (
    <Box sx={sliderMoviesStyle}>
      <Title>{sectionTitle}</Title>
      <Swiper {...swiperConfigs} onReachEnd={onFetchNextPage}>
        {data?.pages.map((group, index) => (
          <Box key={index}>
            {group.results.map(({ poster_path, title, overview, id }) => (
              <SwiperSlide key={id}>
                <Card
                  poster={createImagePath(poster_path)}
                  title={title}
                  description={overview}
                  id={id}
                />
              </SwiperSlide>
            ))}
          </Box>
        ))}
      </Swiper>
    </Box>
  );
};

export default SliderMovies;
