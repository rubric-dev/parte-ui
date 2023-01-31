import React, { HTMLAttributes } from 'react';
import { IconProps } from '../parte-icons/component/Icon';

export type IconButtonProps = HTMLAttributes<HTMLButtonElement> & {
  variant: 'primary' | 'secondary' | 'minimal' | 'error';
  Icon: React.ReactElement<IconProps>;
  size?: number;
  disabled?: boolean;
};
