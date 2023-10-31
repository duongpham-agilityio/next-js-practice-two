import { TableContainer, Table as TableChakra } from '@chakra-ui/react';
import { memo } from 'react';

// Components
import TableHead from './TableHead';
import TableBody from './TableBody';

const Table = (): JSX.Element => (
  <TableContainer w="full" mt={8}>
    <TableChakra style={{ borderCollapse: 'separate', borderSpacing: '0 3px' }}>
      <TableHead />
      <TableBody />
    </TableChakra>
  </TableContainer>
);

export default memo(Table);
