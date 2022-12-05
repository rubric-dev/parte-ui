import badgeColors from '../../@foundations/Badge/badge';
import { BadgeColors } from '../../@foundations/Badge/badge.types';

export const getInitial = (name: string, fallback = '?') => {
  if (!name) return fallback;
  return name
    .replace(/\s+/, ' ')
    .split(' ') // Repeated spaces results in empty strings
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
    .join('');
};

export const getColors = (avatarColor: BadgeColors = 'AUTO') => {
  if (avatarColor === 'AUTO') {
    const keys = Object.keys(badgeColors);
    const colorKey = keys[
      Math.floor(Math.random() * keys.length)
    ] as keyof typeof badgeColors;

    return badgeColors[colorKey];
  }
  return badgeColors[avatarColor];
};

export const getAvatarInitialsFontSize = (size: number) => {
  return Math.floor(size / 2.6);
};
