import { useMemo } from 'react';

// Constants
import { TABLE_SIZE } from '@constants/variables';
import { useSearchParams } from 'next/navigation';
import { SEARCH_KEYS } from '@constants/url';

export type TUsePagination<T> = {
  data: T[];
  pagination: number[];
  currentPage: number;
};

export const usePagination = <T>(
  data: T[],
  record = TABLE_SIZE,
): TUsePagination<T> => {
  const searchParams = useSearchParams()!;
  const currentPage: number = Number(searchParams.get(SEARCH_KEYS.PAGE) ?? 1);

  /**
   * Calculate the number of pages to RECORDS_PER_PAGE
   */
  const pagination = useMemo(() => {
    const filtersLength = data.length;
    const isSizePage = filtersLength % record;
    const sizePage = Math.floor(filtersLength / record);

    return Array.from({ length: isSizePage ? sizePage + 1 : sizePage }).map(
      (_, index: number): number => index + 1,
    );
  }, [data.length, record]);

  /**
   * Get items by page
   */
  const dataShow: T[] = useMemo((): T[] => {
    const result = data.filter((item) => {
      const index = data.indexOf(item);
      const isStartIndex = index >= (currentPage - 1) * record;
      const isEndIndex = index < currentPage * record;
      const condition = isStartIndex && isEndIndex;

      return condition;
    });

    return result;
  }, [currentPage, data, record]);

  return {
    data: dataShow,
    currentPage,
    pagination,
  };
};
