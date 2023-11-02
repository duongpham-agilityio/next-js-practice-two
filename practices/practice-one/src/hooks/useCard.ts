// Services
import { updateCard } from '@services/card';
import { useCallback } from 'react';

type TSuccessHandler = () => void;
type TErrorHandler = (error: Error) => void;
type TUseCardHandler = (
  id: string,
  successHandler?: TSuccessHandler,
  errorHandler?: TErrorHandler,
) => Promise<void>;
export type TUseCard = {
  activeHandler: TUseCardHandler;
  inactiveHandler: TUseCardHandler;
  closeHandler: TUseCardHandler;
};

export const useCard = (): TUseCard => {
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
    ): Promise<void> => {
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
    ): Promise<void> => {
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
    ): Promise<void> => {
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
