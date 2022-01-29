import { Box, useBoolean, useOutsideClick } from '@chakra-ui/react';
import { FC, useMemo, useRef } from 'react';
import debounce from 'lodash.debounce';

import { inputClosedStyle, inputOpenedStyle } from './SearchBar.style';
import { TSearchBarContainerProps, TOnQuery } from './types';
import SearchBar from './SearchBar';

const SearchBarContainer: FC<TSearchBarContainerProps> = ({ onQuery }) => {
  const ref = useRef(null);
  const [focused, setFocus] = useBoolean();
  useOutsideClick({
    ref,
    handler: setFocus.off,
  });

  const inputStyle = useMemo(
    () => (focused ? inputOpenedStyle : inputClosedStyle),
    [focused],
  );

  const handleOnChange: TOnQuery = (query) => {
    if (!query) {
      return;
    }

    return onQuery(query);
  };

  const handleOnChangeDebounced = debounce(handleOnChange, 1000);

  return (
    <Box ref={ref}>
      <SearchBar
        handleOnChangeDebounced={handleOnChangeDebounced}
        inputStyle={inputStyle}
        onClick={setFocus.on}
      />
    </Box>
  );
};

export default SearchBarContainer;
