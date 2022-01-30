import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { toast } from 'react-toastify';

import { TErrorProps } from './types';

const Error: FC<TErrorProps> = ({ error }) => {
  const typedError = error as Error;
  toast.error(typedError.message);

  return <Box data-testid="error" />;
};

export default Error;
