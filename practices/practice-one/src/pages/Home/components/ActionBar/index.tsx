import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import InputSearch from './InputSearch';

const ActionBar = (): JSX.Element => (
  <>
    <Box>
      <InputSearch />
    </Box>
    <Button variant="primary" alignSelf="flex-end">
      Add a new card
    </Button>
  </>
);

export default memo(ActionBar);
