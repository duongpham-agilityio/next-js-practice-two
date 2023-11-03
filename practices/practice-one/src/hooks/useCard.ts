import { useCallback } from 'react';

// Services
import { postCard, updateCard } from '@services/card';

// Types
import { TCardPayload } from '@interfaces/card';

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
  addNewCard: (
    card: TCardPayload,
    successHandler?: TSuccessHandler,
    errorHandler?: TErrorHandler,
  ) => Promise<void>;
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

  /**
   * Handle add new card
   * @param card card info
   * @param successHandler
   * @param errorHandler
   */
  const addNewCard = useCallback(
    async (
      card: TCardPayload,
      successHandler?: TSuccessHandler,
      errorHandler?: TErrorHandler,
    ): Promise<void> => {
      try {
        await postCard(card);
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
    addNewCard,
  };
};
