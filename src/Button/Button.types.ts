import { ReactNode } from 'react';

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  disabled: boolean;
  size: 'sm' | 'md' | 'lg';
  variant: 'default' | 'menu' | 'flat';
  onClick?: () => void;
  fullWidth?: boolean;
  children: ReactNode;
};
