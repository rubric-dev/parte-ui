import React, { ButtonHTMLAttributes } from 'react';

export type TabVariant = 'Primary' | 'Secondary';
export type TabDirection = 'horizontal' | 'vertical';

export type TabProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  leftSlot?: React.ReactElement;
  rightSlot?: React.ReactElement;
  children?: React.ReactNode;
  variant?: TabVariant;
  selected?: boolean;
  disabled?: boolean;
  direction?: TabDirection;
};
