import { avatarColors } from './Avatar.styled';
import { AvatarColors, AvatarProps } from './Avatar.types';

export const getInitial = (name: string, fallback = '?') => {
  if (!name) return fallback;
  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('');
};

export const getColors = (avatarColor: AvatarColors = 'AUTO') => {
  if (avatarColor === 'AUTO') {
    const keys = Object.keys(avatarColors);
    const colorKey = keys[
      Math.floor(Math.random() * keys.length)
    ] as keyof typeof avatarColors;

    return avatarColors[colorKey];
  }
  return avatarColors[avatarColor];
};

export const getAvatarInitialsFontSize = (size: number) => {
  return Math.floor(size / 2.6);
};
