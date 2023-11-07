import {
  FormControl,
  FormLabel,
  Text,
  Select as SelectChakra,
  FormErrorMessage,
} from '@chakra-ui/react';
import { ChangeEvent, memo, useCallback } from 'react';

export type TOption = {
  value: string;
  name: string;
  render?: (displayData: string, value: string) => JSX.Element;
};

type SelectProps = {
  options?: TOption[];
  isRequire?: boolean;
  isError?: boolean;
  label?: string;
  errorMessage?: string;
  name?: string;
  value: string;
  onSelect: (value: string, name?: string) => void;
};

const Select = ({
  options = [],
  isError = false,
  isRequire = false,
  label = '',
  name = '',
  errorMessage = '',
  value,
  onSelect,
}: SelectProps): JSX.Element => {
  /**
   *
   * @param event
   */
  const handleSelect = useCallback(
    (event: ChangeEvent<HTMLSelectElement>): void => {
      const element: HTMLSelectElement = event.target;
      const value: string = element.value;
      const name: string = element.name ?? 'select';

      onSelect(value, name);
    },
    [onSelect],
  );

  return (
    <FormControl w="full" isInvalid={isError}>
      <FormLabel textAlign="left" display="flex" w="full" gap={2}>
        {label}
        {isRequire && (
          <Text
            as="span"
            color="error"
            display="flex"
            alignItems="center"
            fontSize="2xl"
          >
            *
          </Text>
        )}
      </FormLabel>
      <SelectChakra
        name={name}
        placeholder="Select option"
        value={value}
        onChange={handleSelect}
      >
        {options.map((option) => {
          const { value, name, render } = option;

          return (
            <option key={value} value={value}>
              {render ? render(name, value) : name}
            </option>
          );
        })}
      </SelectChakra>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export default memo(Select);
