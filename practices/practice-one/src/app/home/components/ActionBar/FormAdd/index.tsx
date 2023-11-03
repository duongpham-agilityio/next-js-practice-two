'use client';

import { memo, useCallback, useState } from 'react';

// Components
import FormData, { TValueFormData } from '@components/FormData';

// Helpers
import { addHyphen, clearHyphen } from '@helpers/form';

type TTagName = 'name' | 'cardNumber';

const FormAdd = () => {
  const [formData, setFormData] = useState<TValueFormData>({
    cardNumber: '',
    name: '',
    skin: 1,
  });
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

  return (
    <FormData
      cardNumber={cardNumber}
      name={name}
      skin={skin}
      onChangeTextField={handleChangeText}
      onChangeSelectField={handleSelect}
    />
  );
};

export default memo(FormAdd);
