'use client';

import { Button, HStack, List, ListItem } from '@chakra-ui/react';
import { memo } from 'react';

export type PaginationProps = {
  data: number[];
  currentPage: number;
  onChangePage: (page: number) => void;
};

const Pagination = (props: PaginationProps): JSX.Element | null => {
  const { data, currentPage, onChangePage } = props;

  if (data.length <= 1) return null;

  return (
    <HStack as={List} justifyContent="center" py={19} gap={7}>
      {data.map((page: number): JSX.Element => {
        const isActive: boolean = page === currentPage;
        const handleChangePage = (): void => onChangePage(page);

        return (
          <ListItem key={page}>
            <Button
              key={page}
              bg={isActive ? 'secondary' : 'info'}
              color="light"
              fontSize="xs"
              onClick={handleChangePage}
            >
              {page}
            </Button>
          </ListItem>
        );
      })}
    </HStack>
  );
};

export default memo(Pagination);
