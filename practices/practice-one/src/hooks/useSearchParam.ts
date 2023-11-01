import {
  ReadonlyURLSearchParams,
  usePathname,
  useRouter,
  useSearchParams as useSearch,
} from 'next/navigation';
import { useCallback } from 'react';

export type TUseSearchParams = ReadonlyURLSearchParams & {
  setSearchParam: (key: string, value: string) => void;
};

export const useSearchParams = (): TUseSearchParams => {
  const pathName: string = usePathname();
  const router: ReturnType<typeof useRouter> = useRouter();
  const searchParams: ReadonlyURLSearchParams = useSearch();

  /**
   * Handle set search param on url
   * @param key search param name
   * @param value search param value
   */
  const setSearchParam = useCallback(
    (key: string, value: string): void => {
      let newSearchParams: string = '?';
      let isUpdateKey: boolean = false;

      searchParams.forEach((oldValue: string, oldKey: string) => {
        if (oldKey === key) {
          isUpdateKey = true;
          newSearchParams += `${oldKey}=${value}&`;

          return;
        }

        newSearchParams += `${oldKey}=${oldValue}&`;
      });

      if (isUpdateKey) {
        newSearchParams = newSearchParams.substring(
          0,
          newSearchParams.length - 1,
        );
      }

      router.push(`/${pathName}${newSearchParams}`);
    },

    [pathName, router, searchParams],
  );

  return {
    ...searchParams,
    setSearchParam,
  } as TUseSearchParams;
};
