'use client';

import { memo } from 'react';

// Hooks
import { usePagination, useSearch } from '@hooks/index';

// Components
import ActionBar from '../ActionBar';
import Table from '@components/Table';
import Pagination from '@components/Pagination';

// Types
import { ICard } from '@interfaces/card';

export type HomeBodyProps = {
  data: ICard[];
};

const HomeBody = ({ data = [] }: HomeBodyProps): JSX.Element => {
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
      <Table data={card} />
      <Pagination
        data={pagination}
        currentPage={currentPage}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default memo(HomeBody);
