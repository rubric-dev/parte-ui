import React from 'react';

export type RadioGroupProps = {
  value: string;
  name: string;
  disabled?: boolean;
  onChange?: (value: string) => void;
  children: React.ReactElement;
};
