import { useCallback, useRef } from 'react';

// Constants
import { DEBOUNCE_TIME } from '@constants/time';

export type TUseDebounce<T> = (value: T) => void;
/**
 * - This is a custom hook that listens for user input
 * @param callback Have a string as parameter
 * @returns
 */
export const useDebounce = <T>(callback?: TUseDebounce<T>): TUseDebounce<T> => {
  const refTime = useRef<ReturnType<typeof setTimeout>>();
  /**
   * This is a function that waits for a period of time
   * @param value The value to put into the callback when the timeout expires
   */
  const debounce = useCallback(
    (value: T): void => {
      if (refTime.current) clearTimeout(refTime.current);

      refTime.current = setTimeout(() => {
        if (callback) callback(value);
      }, DEBOUNCE_TIME);
    },
    [callback],
  );

  return debounce;
};
