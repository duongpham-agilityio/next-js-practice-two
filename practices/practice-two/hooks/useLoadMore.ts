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

  const dataPerPage = useMemo(() => {
    const indexPage = pagination.indexOf(page);

    return [
      ...pagination
        .slice(0, indexPage + 1)
        .map((currentPage) =>
          blogs.slice(
            (currentPage - 1) * blogPerPage,
            currentPage * blogPerPage,
          ),
        ),
    ];
  }, [blogs, page, pagination]);

  const hasNextPage = useMemo(
    () => pagination.includes(page + 1),
    [pagination, page],
  );

  const fetchNextPage = useCallback(() => {
    if (!hasNextPage) return;

    setPage((pre) => pre + 1);
  }, [hasNextPage]);

  return {
    dataPerPage,
    hasNextPage,
    fetchNextPage,
  };
};
