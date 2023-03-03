import colors from './colors';

export type ColorKey = keyof typeof colors;

export type Colors = Record<ColorKey, string>;
