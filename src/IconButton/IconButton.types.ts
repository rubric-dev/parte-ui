import React, { HTMLAttributes } from 'react';

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'minimal' | 'error';
  Icon: React.ReactElement;
  disabled?: boolean;
};
