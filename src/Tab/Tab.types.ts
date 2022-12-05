import React, { ButtonHTMLAttributes } from 'react';

export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftSlot?: React.ReactElement;
  rightSlot?: React.ReactElement;
  children?: React.ReactNode;
  variant?: 'Primary' | 'Secondary';
  selected?: boolean;
  disabled?: boolean;
};
