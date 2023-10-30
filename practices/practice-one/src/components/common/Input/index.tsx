'use client';

import { Input, InputProps as InputChakraProps } from '@chakra-ui/react';
import { ChangeEvent, ReactNode, memo, useCallback } from 'react';

export type InputProps = Omit<InputChakraProps, 'onChange'> & {
  value?: string;
  leftIcon?: ReactNode;
  onChange?: (value: string) => void;
};

const InputBase = ({
  value = '',
  onChange,
  ...rest
}: InputProps): JSX.Element => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <Input
      value={value}
      onChange={handleChange}
      focusBorderColor="transparent"
      borderColor="transparent"
      {...rest}
    />
  );
};

export default memo(InputBase);
