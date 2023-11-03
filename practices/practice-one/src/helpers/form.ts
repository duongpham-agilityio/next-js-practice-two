// Constants
import { MESSAGES } from '@constants/messages';

/**
 * Handle clear hyphen
 * @param text This is the text that has the hyphen
 * @returns The text not the hyphen
 */
export const clearHyphen = (text: string): string => text.replaceAll('-', '');

/**
 * Handle add hyphen
 * @param text This is the text that not the hyphen
 * @returns The text has the hyphen
 */
export const addHyphen = (text: string): string => {
  const characters: string[] = clearHyphen(text).split('');
  const characterSize: number = characters.length;
  const convert: string = characters
    .map((value: string, index: number): string => {
      const currentIndex: number = index + 1;
      const isAddHyphen: boolean =
        currentIndex % 3 === 0 && currentIndex !== characterSize;

      if (isAddHyphen) return `${value}-`;

      return value;
    })
    .join('');

  return convert;
};

/**
 * Handle validate card number
 * @param cardNumber
 * @returns error message
 */
export const validateCardNumber = (cardNumber: string): string => {
  const textOfPrototype: string = clearHyphen(cardNumber);
  const sizeOfText: number = textOfPrototype.length;

  if (!textOfPrototype) return MESSAGES.EMPTY;

  if (sizeOfText < 12) return MESSAGES.INVALID;

  return '';
};

/**
 * Handle validate name
 * @param name
 * @returns error message
 */
export const validateName = (name: string): string => {
  if (!name) return MESSAGES.EMPTY;

  return '';
};
