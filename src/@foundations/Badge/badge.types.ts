import { badgeColors } from './badge';

export type BadgeColor = typeof badgeColors;
export type BadgeColors = keyof BadgeColor | 'AUTO';
