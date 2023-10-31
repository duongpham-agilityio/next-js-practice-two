import { Th, Thead, Tr } from '@chakra-ui/react';
import { memo } from 'react';

// Mocks
import { tableHead } from '@mocks/table';

export type TTableHeadCell = {
  title: string;
  render?: () => JSX.Element;
};

export type TableHeadProps = {
  data: TTableHeadCell[];
};

const TableHead = (): JSX.Element => (
  <Thead bg="dark10" overflow="hidden">
    <Tr
      borderRadius="10px 10px 0px 0px"
      boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.10)"
    >
      {
        // TODO: Will update to data prop later
        tableHead.map((cell: TTableHeadCell, index: number): JSX.Element => {
          const { title, render } = cell;
          const borderStyle = {
            0: {
              borderTopLeftRadius: '10px',
            },

            [tableHead.length - 1]: {
              borderTopRightRadius: '10px',
            },
          };

          return (
            <Th
              key={title}
              py={6}
              color="white"
              fontSize="md"
              fontWeight="bold"
              textAlign="left"
              textTransform="unset"
              borderColor="transparent"
              {...borderStyle[index]}
            >
              {title}

              {
                //  Render custom
                render && render()
              }
            </Th>
          );
        })
      }
    </Tr>
  </Thead>
);

export default memo(TableHead);
