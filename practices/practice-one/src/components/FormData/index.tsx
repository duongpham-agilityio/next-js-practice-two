'use client';

import { FormEvent, memo, useCallback, useMemo, useState } from 'react';
import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import Image from 'next/image';

// Components
import { InputForm } from './InputForm';
import Select, { TOption } from '@components/common/Select';

// Mocks
import { skinCards } from '@mocks/card';

// Types
import { ICard } from '@interfaces/card';

// Helpers
import { validateCardNumber, validateName } from '@helpers/form';

export type TFormDataProp = {
  cardNumber: string;
  name: string;
  skin: number;
  onChangeTextField: (text: string, name?: string) => void;
  onChangeSelectField: (skinIndex: number, name?: string) => void;
  onSubmit?: () => void;
};

export type TValueFormData = Pick<ICard, 'cardNumber' | 'skin' | 'name'>;
export type TErrorFormData = Omit<TValueFormData, 'skin'>;

const FormData = ({
  cardNumber,
  name,
  skin,
  onChangeTextField,
  onChangeSelectField,
  onSubmit,
}: TFormDataProp): JSX.Element => {
  const [error, setError] = useState<TErrorFormData>({
    cardNumber: '',
    name: '',
  });
  const skinCard: string = skinCards[skin];
  const options: TOption[] = useMemo(
    (): TOption[] => [
      {
        name: 'Skin one',
        value: '0',
      },
      {
        name: 'Skin two',
        value: '1',
      },
      {
        name: 'Skin three',
        value: '2',
      },
      {
        name: 'Skin four',
        value: '3',
      },
      {
        name: 'Skin five',
        value: '4',
      },
      {
        name: 'Skin six',
        value: '5',
      },
    ],
    [],
  );

  /**
   *
   * @param value
   * @returns
   */
  const handleSelect = useCallback(
    (value: string, name?: string): void =>
      onChangeSelectField(Number(value), name),
    [onChangeSelectField],
  );

  /**
   * Handle submit form
   * @param event Event listener
   */
  const handleSubmit = useCallback(
    (event: FormEvent): void => {
      event.preventDefault();

      const cardNumberInvalid: string = validateCardNumber(cardNumber);
      const nameInvalid: string = validateName(name);
      const error: TErrorFormData = {
        cardNumber: cardNumberInvalid,
        name: nameInvalid,
      };

      if (cardNumberInvalid || nameInvalid) {
        return setError(error);
      }

      onSubmit && onSubmit();
    },
    [cardNumber, name, onSubmit],
  );

  return (
    <VStack as="form" onSubmit={handleSubmit} p={2}>
      <VStack gap={8} w="full">
        <InputForm
          label="The card number"
          name="cardNumber"
          placeholder="Please enter card number (e.x: 000-000-000-000)"
          isError={!!error.cardNumber}
          errorMessage={error.cardNumber}
          value={cardNumber}
          onChange={onChangeTextField}
        />
        <InputForm
          label="Name"
          name="name"
          placeholder="Please enter your name (e.x: Jimmy Nguyen)"
          isError={!!error.name}
          errorMessage={error.name}
          value={name}
          onChange={onChangeTextField}
        />
        <Flex gap={5} w="full">
          <Box flex={1}>
            <Select
              label="Skins"
              options={options}
              value={`${skin}`}
              onSelect={handleSelect}
            />
          </Box>
          <Box width={351}>
            {skinCard ? (
              <Image src={skinCard} alt="Skin one" width={351} height={223} />
            ) : null}
          </Box>
        </Flex>
      </VStack>

      <Button type="submit" variant="primary" mt={20} textTransform="uppercase">
        submit
      </Button>
    </VStack>
  );
};

export default memo(FormData);
