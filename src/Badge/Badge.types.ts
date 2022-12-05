import { HTMLAttributes } from 'react';
import { BadgeColors } from '../@foundations/Badge/badge.types';

type BadgeType = 'badge' | 'pills';

export type BadgeProps = HTMLAttributes<HTMLButtonElement> & {
  type?: BadgeType;
  badgeColor?: BadgeColors;
  text?: string;
};
