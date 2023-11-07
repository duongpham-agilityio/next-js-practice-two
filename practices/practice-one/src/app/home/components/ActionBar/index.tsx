'use client';

import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';

// Hooks
import { useToggleForm } from '@hooks/index';

// Constants
import { ACTIONS } from '@constants/actions';

// Components
import InputSearch from './InputSearch';
import ModalCustom from '@components/Modal';
import FormAdd from './FormAdd';

export type TActionBarProps = {
  searchValue: string;
  onChangeSearch: (value: string) => void;
};

const ActionBar = ({
  searchValue,
  onChangeSearch,
}: TActionBarProps): JSX.Element => {
  const { isOpen: isOpenCreateForm, toggle: toggleCreateForm } = useToggleForm(
    ACTIONS.CREATE,
  );

  return (
    <>
      <Box>
        <InputSearch value={searchValue} onChange={onChangeSearch} />
      </Box>
      <Button variant="primary" alignSelf="flex-end" onClick={toggleCreateForm}>
        Add a new card
      </Button>

      {isOpenCreateForm && (
        <ModalCustom title="Create" isOpen onClose={toggleCreateForm}>
          <FormAdd onCloseForm={toggleCreateForm} />
        </ModalCustom>
      )}
    </>
  );
};

export default memo(ActionBar);
