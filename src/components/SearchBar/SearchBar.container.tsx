import { Box, useBoolean, useOutsideClick } from '@chakra-ui/react';
import { FC, useMemo, useRef } from 'react';
import debounce from 'lodash.debounce';

import { inputClosedStyle, inputOpenedStyle } from './searchBar.style';
import { TSearchBarContainerProps, THandleOnChangeFn } from './types';
import SearchBar from './SearchBar';

const SearchBarContainer: FC<TSearchBarContainerProps> = ({ setQuery }) => {
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

  const handleOnChange: THandleOnChangeFn = ({ target }) => {
    if (!target?.value) {
      return;
    }

    return setQuery(target.value);
  };

  const handleOnChangeDebounced = debounce(handleOnChange, 300);

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
