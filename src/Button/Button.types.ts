import React, { ButtonHTMLAttributes } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'minimal' | 'error';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  /**
   * @uxpinignoreprop
   */
  children: React.ReactNode;
};
