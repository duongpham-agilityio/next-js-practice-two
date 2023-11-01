'use client';

import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import InputSearch from './InputSearch';

export type TActionBarProps = {
  searchValue: string;
  onChangeSearch: (value: string) => void;
  onSearch: () => void;
};

const ActionBar = ({
  searchValue,
  onChangeSearch,
  onSearch,
}: TActionBarProps): JSX.Element => (
  <>
    <Box>
      <InputSearch
        value={searchValue}
        onChange={onChangeSearch}
        onClick={onSearch}
      />
    </Box>
    <Button variant="primary" alignSelf="flex-end">
      Add a new card
    </Button>
  </>
);

export default memo(ActionBar);
