import { HTMLAttributes } from 'react';
import { avatarColors } from './Avatar.styled';

type AvatarShape = 'CIRCLE' | 'SQUARE';
export type AvatarColors = keyof typeof avatarColors | 'AUTO';
export type AvatarProps = HTMLAttributes<HTMLButtonElement> & {
  avatarColor?: AvatarColors;
  size?: number;
  shape?: AvatarShape;
  name?: string;
  showInitial?: boolean;
  src?: string;
};
