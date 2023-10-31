'use client';

import { Button, HStack, List, ListItem } from '@chakra-ui/react';
import { memo } from 'react';

export type PaginationProps = {
  data: number[];
  currentPage: number;
};

const Pagination = (props: PaginationProps): JSX.Element => {
  const { data, currentPage } = props;

  if (!data.length || data.length === 1) return <></>;

  return (
    <HStack as={List} justifyContent="center" py={19} gap={7}>
      {data.map((page: number): JSX.Element => {
        const isActive = page === currentPage;

        return (
          <ListItem key={page}>
            <Button
              key={page}
              bg={isActive ? 'secondary' : 'info'}
              color="light"
              fontSize="xs"
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
