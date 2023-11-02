// Services
import { updateCard } from '@services/card';
import { useCallback } from 'react';

type TSuccessHandler = () => void;
type TErrorHandler = (error: Error) => void;

export const useCard = () => {
  /**
   * Handle active for card
   * @param id
   * @param successHandler
   * @param errorHandler
   */
  const activeHandler = useCallback(
    async (
      id: string,
      successHandler?: TSuccessHandler,
      errorHandler?: TErrorHandler,
    ) => {
      try {
        await updateCard(id, { status: 'active' });
        successHandler && successHandler();
      } catch (error) {
        errorHandler && errorHandler(error as Error);
      }
    },
    [],
  );

  /**
   * Handle inactive for card
   * @param id
   * @param successHandler
   * @param errorHandler
   */
  const inactiveHandler = useCallback(
    async (
      id: string,
      successHandler?: TSuccessHandler,
      errorHandler?: TErrorHandler,
    ) => {
      try {
        await updateCard(id, { status: 'inactive' });
        successHandler && successHandler();
      } catch (error) {
        errorHandler && errorHandler(error as Error);
      }
    },
    [],
  );

  /**
   * Handle close for card
   * @param id
   * @param successHandler
   * @param errorHandler
   */
  const closeHandler = useCallback(
    async (
      id: string,
      successHandler?: TSuccessHandler,
      errorHandler?: TErrorHandler,
    ) => {
      try {
        await updateCard(id, { status: 'close' });
        successHandler && successHandler();
      } catch (error) {
        errorHandler && errorHandler(error as Error);
      }
    },
    [],
  );

  return {
    activeHandler,
    inactiveHandler,
    closeHandler,
  };
};
