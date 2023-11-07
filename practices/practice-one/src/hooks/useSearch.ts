// Hooks
import { useSearchParams } from './useSearchParam';

// Constants
import { SEARCH_KEYS } from '@constants/url';

// Types
import { ICard } from '@interfaces/card';
import { useCallback, useMemo, useState } from 'react';
import { useDebounce } from '.';

export type TUseSearch = {
  data: ICard[];
  searchValue: string;
  changeSearch: (value: string) => void;
};

export const useSearch = (data: ICard[]): TUseSearch => {
  const { get, setSearchParam } = useSearchParams();
  const currentSearchValue: string = (get(SEARCH_KEYS.NAME) || '').trim();
  const [search, setSearch] = useState<string>(currentSearchValue);

  /**
   * Check if there is any matching data in the list
   * @param nameParam is the value the user need find
   * @param data is the current product needs check
   * @returns
   */
  const isIncludeName = useCallback(
    (nameParam: string, data: ICard): boolean => {
      const { name } = data;
      const lowerCaseName: string = name.toLowerCase();
      const lowerCaseValue: string = nameParam.toLowerCase();
      const isIncludes: boolean = lowerCaseName.includes(lowerCaseValue);

      return isIncludes;
    },
    [],
  );

  /**
   * Handles the searchParam update logic
   */
  const handleSearch = useDebounce<string>((value) => {
    setSearchParam(SEARCH_KEYS.NAME, value);
  });

  /**
   * Listen for the input change event
   * @param value is the value the user need to find in the list
   */
  const changeSearch = useCallback(
    (value: string) => {
      setSearch(value);
      handleSearch(value);
    },
    [handleSearch],
  );

  // Filter data by 'condition'
  const result: ICard[] = useMemo(
    (): ICard[] =>
      data.filter((card: ICard): boolean =>
        isIncludeName(currentSearchValue, card),
      ),
    [currentSearchValue, data, isIncludeName],
  );

  return {
    data: result,
    searchValue: search,
    changeSearch,
  };
};
