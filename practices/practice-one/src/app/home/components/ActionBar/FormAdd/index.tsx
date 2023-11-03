/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { memo, useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// Hooks
import { useCard, useToast } from '@hooks/index';

// Components
import FormData, { TValueFormData } from '@components/FormData';

// Helpers
import { addHyphen, clearHyphen } from '@helpers/form';

// Types
import { TCardPayload } from '@interfaces/card';
import { ROUTES } from '@constants/url';

type TTagName = 'name' | 'cardNumber';

const initFormState: TValueFormData = {
  cardNumber: '',
  name: '',
  skin: 0,
};

const FormAdd = () => {
  const queryClient = useQueryClient();
  const { addNewCard } = useCard();
  const { showToast } = useToast();
  const [formData, setFormData] = useState<TValueFormData>(initFormState);
  const { cardNumber, name, skin } = formData;

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
      setFormData((prev: TValueFormData) => ({ ...prev, skin: value })),
    [],
  );

  /**
   * Handle submit data for add new card
   */
  const handleSubmit = useCallback(async (): Promise<void> => {
    const newCard: TCardPayload = {
      ...formData,
      role: 'user',
      status: 'active',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

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
      setFormData(initFormState);
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

    await addNewCard(newCard, successHandler, errorHandler);
  }, [addNewCard, formData]);

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

export default memo(FormAdd);
