'use client';

import { memo } from 'react';

// Hooks
import { usePagination } from '@hooks/usePagination';

// Components
import ActionBar from '../ActionBar';
import Table from '@components/Table';
import Pagination from '@components/Pagination';

// Types
import { ICard } from '@interfaces/card';

export type HomeBodyProps = {
  data: ICard[];
};

const HomeBody = ({ data }: HomeBodyProps): JSX.Element => {
  const { data: card, pagination, currentPage } = usePagination(data);

  return (
    <>
      <ActionBar />
      <Table data={card} />
      <Pagination data={pagination} currentPage={currentPage} />
    </>
  );
};

export default memo(HomeBody);
