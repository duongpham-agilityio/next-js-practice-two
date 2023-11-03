// Constants
import { SEARCH_KEYS } from '@constants/url';

// Hooks
import { useSearchParams } from './useSearchParam';
import { useCallback } from 'react';

export const useToggleForm = (action: string) => {
  const { get, setSearchParam } = useSearchParams();
  const isOpen: boolean = (get(SEARCH_KEYS.ACTION) || '') === action;

  /**
   *
   */
  const toggle = useCallback(() => {
    if (isOpen) return setSearchParam(SEARCH_KEYS.ACTION, '');

    return setSearchParam(SEARCH_KEYS.ACTION, action);
  }, [action, isOpen, setSearchParam]);

  return {
    isOpen,
    toggle,
  };
};
