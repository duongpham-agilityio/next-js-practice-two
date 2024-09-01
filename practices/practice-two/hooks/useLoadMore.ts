import { useCallback, useMemo, useState } from 'react';

// Constants
import { BLOGS_PER_PAGE_LIMIT } from '@/constants';

export interface UseLoadMoreOption {
  blogPerPage: number;
}

export const useLoadMore = <T>(blogs: T[], options?: UseLoadMoreOption) => {
  const { blogPerPage }: UseLoadMoreOption = {
    ...options,
    blogPerPage: BLOGS_PER_PAGE_LIMIT,
  };
  const [page, setPage] = useState(1);

  const pagination = useMemo(() => {
    const filtersLength = blogs.length;
    const isSizePage = filtersLength % blogPerPage;
    const sizePage = Math.floor(filtersLength / blogPerPage);

    return Array.from({ length: isSizePage ? sizePage + 1 : sizePage }).map(
      (_, index: number): number => index + 1,
    );
  }, [blogs.length, blogPerPage]);

  // Handle the case when the last page before deletion has only one item.
  const currentPage = pagination.length < page ? pagination.length : page;

  const dataPerPage = useMemo(() => {
    const indexPage = pagination.indexOf(currentPage);

    return [
      ...pagination
        .slice(0, indexPage + 1)
        .map((item) =>
          blogs.slice((item - 1) * blogPerPage, item * blogPerPage),
        ),
    ];
  }, [blogs, currentPage, pagination]);

  const hasNextPage = useMemo(
    () => pagination.includes(currentPage + 1),
    [pagination, currentPage],
  );

  const fetchNextPage = useCallback(() => {
    if (!hasNextPage) return;

    setPage(currentPage + 1);
  }, [hasNextPage, currentPage]);

  return {
    dataPerPage,
    hasNextPage,
    fetchNextPage,
  };
};
