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

// Services
import { getAllCard } from '@services/card';

// Types
import { ICard } from '@interfaces/card';
import Skeleton from '@components/Skeleton';

const HomeBody = (): JSX.Element => {
  const { data = [], isLoading } = useQuery<ICard[]>({
    queryKey: [ROUTES.CARD],
    queryFn: getAllCard,
  });

  const {
    data: searchData,
    searchValue,
    changeSearch,
    handleSearch,
  } = useSearch(data);
  const {
    data: card,
    pagination,
    currentPage,
    handleChangePage,
  } = usePagination(searchData);

  return (
    <>
      <ActionBar
        searchValue={searchValue}
        onChangeSearch={changeSearch}
        onSearch={handleSearch}
      />

      <Skeleton isLoading={isLoading}>
        <Table data={card} />
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
