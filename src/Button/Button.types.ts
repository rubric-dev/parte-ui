import { HTMLAttributes } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'minimal' | 'error';
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  disabled?: boolean;
};
