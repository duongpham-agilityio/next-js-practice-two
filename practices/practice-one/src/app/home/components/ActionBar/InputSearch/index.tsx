import { Center, IconButton, InputGroup } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import { InputBase, InputProps } from '@components/common';

// Icons
import { SearchIcon } from '@assets/icons';

export type InputSearchProps = Omit<
  InputProps,
  'onClick' | 'onChange' | 'value'
> & {
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
};

const InputSearch = ({ onClick, ...props }: InputSearchProps): JSX.Element => (
  <InputGroup
    as={Center}
    borderRadius="xl"
    border="3px solid"
    borderColor="gray"
    px={5}
  >
    {/* Search icon */}
    <IconButton aria-label="The search icon" onClick={onClick}>
      <SearchIcon />
    </IconButton>

    {/* Fill input */}
    <InputBase w={523} py={8} placeholder="Search something" {...props} />
  </InputGroup>
);

export default memo(InputSearch);
