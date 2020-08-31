import React, { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/core';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label: string;
};

const InputField = ({ label, size: _, ...props }: Props) => {
  const [field, { error }] = useField(props);

  return (
    <div>
      <FormControl isInvalid={!!error}>
        <FormLabel htmlFor={field.name}>{label}</FormLabel>
        <Input
          {...field}
          {...props}
          id={field.name}
          placeholder={props.placeholder}
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>}
      </FormControl>
    </div>
  );
};

export default InputField;
