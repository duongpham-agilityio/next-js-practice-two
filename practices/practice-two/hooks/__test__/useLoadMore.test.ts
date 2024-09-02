import { renderHook, act } from '@testing-library/react';

// Hooks
import { useLoadMore } from '@/hooks';
// Mocks
import { BLOGS } from '@/mocks';

describe('useLoadMore', () => {
  it('should initialize with correct data per page', () => {
    const { result } = renderHook(() => useLoadMore(BLOGS));

    expect(result.current.dataPerPage.flat().length).toBe(6);
    expect(result.current.hasNextPage).toBe(false);
  });

  it('should fetch next page', () => {
    const { result } = renderHook(() =>
      useLoadMore([...BLOGS], { blogPerPage: 3 }),
    );

    expect(result.current.hasNextPage).toBe(true);
  });

  it('should handle the last page correctly', () => {
    const { result } = renderHook(() =>
      useLoadMore(BLOGS.slice(0, 4), { blogPerPage: 3 }),
    );

    act(() => {
      result.current.fetchNextPage();
    });

    expect(result.current.dataPerPage.flat().length).toBe(4); // 3 items from the first page + 1 item from the next
    expect(result.current.hasNextPage).toBe(false);
  });
});
