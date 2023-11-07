'use client';

import { memo } from 'react';
import { useQuery } from '@tanstack/react-query';

// Hooks
import { usePagination, useSearch } from '@hooks/index';

// Constants
import { ROUTES } from '@constants/url';

// Components
import ActionBar from '../ActionBar';
import Table from '@components/Table';
import Pagination from '@components/Pagination';
import Skeleton from '@components/Skeleton';

// Services
import { getAllCard } from '@services/card';

// Types
import { ICard } from '@interfaces/card';
import { Center, Text } from '@chakra-ui/react';

const HomeBody = (): JSX.Element => {
  const { data = [], isLoading } = useQuery<ICard[]>({
    queryKey: [ROUTES.CARD],
    queryFn: getAllCard,
  });

  const { data: searchData, searchValue, changeSearch } = useSearch(data);

  const {
    data: card,
    pagination,
    currentPage,
    handleChangePage,
  } = usePagination(searchData);

  console.log('Card', data);

  return (
    <>
      <ActionBar searchValue={searchValue} onChangeSearch={changeSearch} />

      <Skeleton isLoading={isLoading}>
        {card.length ? (
          <Table data={card} />
        ) : !isLoading ? (
          <Center minH={458} w="full">
            <Text fontSize="xl">There is no suitable data</Text>
          </Center>
        ) : null}
      </Skeleton>

      <Pagination
        data={pagination}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default memo(HomeBody);
