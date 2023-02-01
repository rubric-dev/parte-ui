import React, { ButtonHTMLAttributes } from 'react';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'minimal' | 'error';
  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  /**
   * @uxpinignoreprop
   */
  children: React.ReactNode;
};
