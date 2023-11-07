/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { memo, useCallback, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

// Constants
import { ROUTES } from '@constants/url';

// Hooks
import { useCard, useToast } from '@hooks/index';

// Components
import FormData, { TValueFormData } from '@components/FormData';

// Helpers
import { formatTypingCardNumber } from '@helpers/form';

// Types
import { TCardPayload } from '@interfaces/card';

type TTagName = 'name' | 'cardNumber';

const initFormState: TValueFormData = {
  cardNumber: '',
  name: '',
  skin: 0,
};

export type FormAddProps = {
  onCloseForm: () => void;
};

const FormAdd = ({ onCloseForm }: FormAddProps) => {
  const queryClient = useQueryClient();
  const { addNewCard } = useCard();
  const { showToast } = useToast();
  const [formData, setFormData] = useState<TValueFormData>(initFormState);
  const { cardNumber, name, skin } = formData;

  /**
   * Get text by tag name
   * @param tagName the tag name you want get text
   * @param text the text need handle
   * @returns
   */
  const getValueByTagName = useCallback(
    (tagName: TTagName, text: string): string => {
      const action: Record<TTagName, string> = {
        cardNumber: formatTypingCardNumber(text),
        name: text,
      };

      return action[tagName];
    },
    [],
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
