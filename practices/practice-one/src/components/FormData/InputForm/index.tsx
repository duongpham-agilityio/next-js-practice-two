import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputProps,
  Text,
} from '@chakra-ui/react';
import { ChangeEvent, memo, useCallback } from 'react';

export type TInputFormProps = Omit<InputProps, 'onChange'> & {
  isRequire?: boolean;
  isError?: boolean;
  label?: string;
  errorMessage?: string;
  onChange: (value: string, name?: string) => void;
};

const InputFormComponent = ({
  isRequire = false,
  isError = false,
  label,
  errorMessage,
  onChange,
  ...props
}: TInputFormProps) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const el: HTMLInputElement = e.target;
      onChange(el.value, el.name ?? '');
    },
    [onChange],
  );

  return (
    <FormControl isInvalid={isError}>
      {label && (
        <FormLabel display="flex" gap={2}>
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
      )}
      <Input {...props} onChange={handleChange} color="dark" />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  );
};

export const InputForm = memo(InputFormComponent);
