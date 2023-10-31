import { TableContainer, Table as TableChakra } from '@chakra-ui/react';
import { memo } from 'react';
import TableHead from './TableHead';

const Table = (): JSX.Element => (
  <TableContainer w="full" mt={8}>
    <TableChakra>
      <TableHead />
    </TableChakra>
  </TableContainer>
);

export default memo(Table);
