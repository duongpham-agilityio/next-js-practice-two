'use client';

import { Tbody, useDisclosure } from '@chakra-ui/react';
import { memo, useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// Hooks
import { useCard, useClipBoard, useToast } from '@hooks/index';

// Helpers
import { getTimeString } from '@helpers/time';

// Constants
import { ROUTES } from '@constants/url';
import { MESSAGES } from '@constants/messages';
import { TITLES } from '@constants/titles';

// Components
import Row from './components/Row';
import Dialog from '@components/Dialog';

// Types
import { ICard } from '@interfaces/card';
import { useRouter } from 'next/navigation';

export type TableBodyProps = {
  data: ICard[];
};
type TStatusInfo = {
  title: string;
  desc: string;
};
type TStatus = Record<ICard['status'], TStatusInfo>;

const TableBody = ({ data }: TableBodyProps): JSX.Element => {
  const { activeHandler, inactiveHandler, closeHandler } = useCard();
  const { isOpen: isOpenDialog, onToggle } = useDisclosure();
  const [idIsSelected, setIdIsSelected] = useState('');
  const router = useRouter();
  const queryClient = useQueryClient();
  const { copyText } = useClipBoard();
  const { showToast } = useToast({
    duration: 2000,
  });

  /**
   * Handle get card in list card
   * @param id the ID of card item
   * @returns card
   */
  const getCardById = useCallback(
    (id: string): ICard | undefined => data.find((item) => item.id === id),
    [data],
  );

  /**
   * Handle get info of warning status
   * @param status status of card
   * @returns info status
   */
  const getWarningInfo = useCallback((status: ICard['status']): TStatusInfo => {
    const info: TStatus = {
      active: {
        title: TITLES.ACTIVE,
        desc: MESSAGES.ACTIVE_FAILED,
      },
      inactive: {
        title: TITLES.INACTIVE,
        desc: MESSAGES.INACTIVE_FAILED,
      },
      close: {
        title: TITLES.CLOSE,
        desc: MESSAGES.CLOSE_CARD_FAILED,
      },
    };

    return info[status];
  }, []);

  /**
   * Check if the state to be updated is the same as the original state
   * @param id The ID of the card needs check
   * @param status Status you want to update
   * @returns
   */
  const isFieldUpdateCorrect = useCallback(
    (id: string, status: ICard['status']): boolean => {
      const card: ICard | undefined = getCardById(id);

      if (!card) return false;

      const { status: stt, role } = card;

      if (role === 'admin') {
        return false;
      }

      if (stt === status) {
        const { title, desc: description }: TStatusInfo =
          getWarningInfo(status);

        showToast({
          title,
          description,
          status: 'warning',
        });

        return false;
      }

      return true;
    },
    [getCardById, getWarningInfo, showToast],
  );

  /**
   * Common error handling when performing unsuccessful actions
   * @param title The title match the current action
   * @returns The callback error handler
   */
  const errorHandler = useCallback(
    (title: string): ((error: Error) => void) =>
      (error: Error) =>
        showToast({
          title: title,
          description: error.message,
          status: 'error',
        }),
    [showToast],
  );

  /**
   * Common success handling when performing successful actions
   * @param title The title match the current action
   * @param description The message show on screen
   * @returns The callback success handler
   */
  const successHandler = useCallback(
    (title: string, description: string): (() => void) =>
      () => {
        showToast({
          title,
          description,
          status: 'success',
        });

        queryClient.invalidateQueries({ queryKey: [ROUTES.CARD] });

        if (isOpenDialog) onToggle();
      },
    [isOpenDialog, onToggle, queryClient, showToast],
  );

  /**
   * Handle active card
   * @param id
   */
  const handleActiveCard = useCallback(
    (id: string): void => {
      const isCorrect: boolean = isFieldUpdateCorrect(id, 'active');

      if (!isCorrect) return;

      activeHandler(
        id,
        successHandler(TITLES.ACTIVE, MESSAGES.ACTIVE_SUCCESS),
        errorHandler(TITLES.ACTIVE),
      );
    },
    [activeHandler, errorHandler, isFieldUpdateCorrect, successHandler],
  );

  /**
   * Handle inactive card
   * @param id
   */
  const handleInActiveCard = useCallback(
    (id: string): void => {
      const isCorrect: boolean = isFieldUpdateCorrect(id, 'inactive');

      if (!isCorrect) return;

      inactiveHandler(
        id,
        successHandler(TITLES.INACTIVE, MESSAGES.INACTIVE_SUCCESS),
        errorHandler(TITLES.INACTIVE),
      );
    },
    [errorHandler, inactiveHandler, isFieldUpdateCorrect, successHandler],
  );

  /**
   * Handle close card
   * @param id
   */
  const handleCloseCard = useCallback(async (): Promise<void> => {
    const onSuccess = () => {
      successHandler(TITLES.CLOSE, MESSAGES.CLOSE_CARD_SUCCESS)();
      onToggle();
    };

    await closeHandler(idIsSelected, onSuccess, errorHandler(TITLES.CLOSE));
  }, [closeHandler, errorHandler, idIsSelected, onToggle, successHandler]);

  /**
   *
   * @param id
   */
  const handleSelectedId = useCallback(
    (id: string): void => {
      const isCorrect: boolean = isFieldUpdateCorrect(id, 'close');

      if (!isCorrect) return;

      setIdIsSelected(id);
      onToggle();
    },
    [isFieldUpdateCorrect, onToggle],
  );

  /**
   * Handle navigate to detail page
   * @param path
   */
  const handleNavigation = useCallback(
    (path: string): void => {
      router.push(path);
    },
    [router],
  );

  /**
   * Handle copy card number
   * @param cardNumber
   */
  const handleCopyCardNumber = useCallback(
    async (cardNumber: string): Promise<void> => {
      const successHandler = (): void => {
        showToast({
          title: TITLES.COPY,
          description: MESSAGES.COPY_SUCCESS,
          status: 'success',
        });
      };

      const errorHandler = (error: Error): void => {
        showToast({
          title: TITLES.COPY,
          description: error.message,
          status: 'error',
        });
      };

      copyText(cardNumber, successHandler, errorHandler);
    },
    [copyText, showToast],
  );

  return (
    <>
      <Tbody>
        {data.map((cell): JSX.Element => {
          const createdAt: string = getTimeString(new Date(cell.createdAt));
          const updatedAt: string = getTimeString(new Date(cell.updatedAt));

          return (
            <Row
              key={cell.id}
              {...cell}
              createdAt={createdAt}
              updatedAt={updatedAt}
              onCopy={handleCopyCardNumber}
              onActive={handleActiveCard}
              onInActive={handleInActiveCard}
              onClose={handleSelectedId}
              onNavigate={handleNavigation}
            />
          );
        })}

        <Dialog
          isOpen={isOpenDialog}
          title={TITLES.CLOSE}
          description={MESSAGES.DIALOG_CONFIRM}
          onClose={onToggle}
          onAccept={handleCloseCard}
        />
      </Tbody>
    </>
  );
};

export default memo(TableBody);
