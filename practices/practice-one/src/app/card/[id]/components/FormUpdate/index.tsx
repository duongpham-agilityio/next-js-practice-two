'use client';

import { memo, useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// Hooks
import { useCard, useToast } from '@hooks/index';

// Constants
import { ROUTES } from '@constants/url';

// Helpers
import { addHyphen, clearHyphen } from '@helpers/form';

// Components
import FormData from '@components/FormData';

// Types
import { ICard } from '@interfaces/card';

type TTagName = 'name' | 'cardNumber';

export type FormUpdateProps = {
  data: ICard;
  onCloseForm: () => void;
};

const FormUpdate = ({ data, onCloseForm }: FormUpdateProps): JSX.Element => {
  const [{ cardNumber, name, skin, id, ...rest }, setFormData] =
    useState<ICard>(data);
  const queryClient = useQueryClient();
  const { updateInfo } = useCard();
  const { showToast } = useToast();

  /**
   * Handle text for card number
   * @param text the text need handle
   */
  const handleConvertValueForCardNumber = useCallback(
    (text: string): string => {
      const textIsClearHyphen: string = clearHyphen(text);
      const textSize: number = textIsClearHyphen.length;
      const isTheNotANumber: boolean = isNaN(Number(textIsClearHyphen));
      const isLessThan12: boolean = textSize > 12;

      if (isTheNotANumber) return textIsClearHyphen.substring(0, textSize - 1);

      if (isLessThan12) return addHyphen(textIsClearHyphen.substring(0, 12));

      return addHyphen(text);
    },
    [],
  );

  /**
   * Get text by tag name
   * @param tagName the tag name you want get text
   * @param text the text need handle
   * @returns
   */
  const getValueByTagName = useCallback(
    (tagName: TTagName, text: string): string => {
      const action: Record<TTagName, string> = {
        cardNumber: handleConvertValueForCardNumber(text),
        name: text,
      };

      return action[tagName];
    },
    [handleConvertValueForCardNumber],
  );

  /**
   * Handle update text
   * @param text
   * @param name
   */
  const handleChangeText = useCallback(
    (text: string, name?: string): void =>
      setFormData((prev) => ({
        ...prev,
        [name || 'default']: getValueByTagName(
          (name as TTagName) ?? 'cardNumber',
          text,
        ),
      })),
    [getValueByTagName],
  );

  /**
   * Handle update skin
   * @param value
   */
  const handleSelect = useCallback(
    (value: number): void =>
      setFormData((prev: ICard) => ({ ...prev, skin: value })),
    [],
  );

  /**
   * Handle submit data for add new card
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    /**
     * Handle when add new card success
     */
    const successHandler = () => {
      showToast({
        title: 'Create',
        description: 'Create new card successful',
        status: 'success',
      });
      queryClient.invalidateQueries({
        queryKey: [ROUTES.CARD],
      });
      onCloseForm();
    };

    /**
     *  Handle when add new card fail
     * @param error
     */
    const errorHandler = (error: Error) => {
      showToast({
        title: 'Create',
        description: error.message,
        status: 'error',
      });
    };

    await updateInfo(
      id,
      { cardNumber, name, skin, id, ...rest },
      successHandler,
      errorHandler,
    );
  }, [
    updateInfo,
    id,
    cardNumber,
    name,
    skin,
    rest,
    showToast,
    queryClient,
    onCloseForm,
  ]);

  return (
    <FormData
      cardNumber={cardNumber}
      name={name}
      skin={skin}
      onChangeTextField={handleChangeText}
      onChangeSelectField={handleSelect}
      onSubmit={handleSubmit}
    />
  );
};

export default memo(FormUpdate);
