import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import InputSearch, { InputSearchProps } from './InputSearch';

export type ActionBarProps = InputSearchProps & {
  onAddCard: () => void;
};

const ActionBar = ({
  onAddCard,
  ...inputProps
}: ActionBarProps): JSX.Element => (
  <>
    <Box>
      <InputSearch {...inputProps} />
    </Box>
    <Button variant="primary" alignSelf="flex-end" onClick={onAddCard}>
      Click me
    </Button>
  </>
);

export default memo(ActionBar);
