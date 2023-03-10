import badgeColors from '../../@foundations/Badge/badge';
export const getInitial = (name, fallback = '?') => {
    if (!name)
        return fallback;
    return name
        .replace(/\s+/, ' ')
        .split(' ') // Repeated spaces results in empty strings
        .slice(0, 2)
        .map((v) => v && v[0].toUpperCase()) // Watch out for empty strings
        .join('');
};
export const getColors = (avatarColor = 'AUTO') => {
    if (avatarColor === 'AUTO') {
        const keys = Object.keys(badgeColors);
        const colorKey = keys[Math.floor(Math.random() * keys.length)];
        return badgeColors[colorKey];
    }
    return badgeColors[avatarColor];
};
export const getAvatarInitialsFontSize = (size) => {
    return Math.floor(size / 2.6);
};
