import { Text, TextProps } from '@chakra-ui/react';
import { FC } from 'react';

const Title: FC<TextProps> = ({ children, ...rest }) => (
  <Text fontSize={['2xl', '4xl']} color="title" {...rest}>
    {children}
  </Text>
);

export default Title;
